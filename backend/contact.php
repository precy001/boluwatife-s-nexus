<?php
/**
 * Contact Form API Endpoint
 * Receives contact form submissions and stores them in the database
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

// Validate required fields
if (!$data || !isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing required fields']);
    exit;
}

// Sanitize and validate input
$name = sanitizeInput($data['name']);
$email = sanitizeInput($data['email']);
$message = sanitizeInput($data['message']);

// Validate name
if (empty($name) || strlen($name) > 100) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name must be between 1 and 100 characters']);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 255) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

// Validate message
if (empty($message) || strlen($message) > 1000) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Message must be between 1 and 1000 characters']);
    exit;
}

try {
    $pdo = getDBConnection();
    
    // Insert message into database
    $stmt = $pdo->prepare("
        INSERT INTO messages (name, email, message, created_at, is_read)
        VALUES (:name, :email, :message, NOW(), 0)
    ");
    
    $stmt->execute([
        ':name' => $name,
        ':email' => $email,
        ':message' => $message
    ]);
    
    echo json_encode([
        'success' => true,
        'message' => 'Message sent successfully'
    ]);
    
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to save message']);
}
