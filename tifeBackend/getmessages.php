<?php
/**
 * Get Messages API Endpoint
 * Retrieves all contact messages from the database
 */

require_once 'config.php';

setCorsHeaders();

// Only accept GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

try {
    $pdo = getDBConnection();
    
    // Get all messages, newest first
    $stmt = $pdo->query("
        SELECT id, name, email, message, created_at, is_read
        FROM contact_messages
        ORDER BY created_at DESC
    ");
    
    $messages = $stmt->fetchAll();
    
    echo json_encode([
        'success' => true,
        'messages' => $messages
    ]);
    
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to retrieve messages']);
}
