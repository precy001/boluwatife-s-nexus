<?php
/**
 * Delete Message API Endpoint
 */

require_once 'config.php';

setCorsHeaders();

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data || !isset($data['id'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Message ID required']);
    exit;
}

$id = (int) $data['id'];

try {
    $pdo = getDBConnection();
    
    $stmt = $pdo->prepare("DELETE FROM contact_messages WHERE id = :id");
    $stmt->execute([':id' => $id]);
    
    echo json_encode(['success' => true, 'message' => 'Message deleted successfully']);
    
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to delete message']);
}
