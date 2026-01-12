import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Trash2, Check, RefreshCw, ArrowLeft, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
  is_read: number;
}

const API_BASE = "https://schiipha-buraq.com.ng/tifeBackend";

export default function Admin() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const { toast } = useToast();

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/getmessages.php`);
      const data = await response.json();
      
      if (data.success) {
        setMessages(data.messages);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch messages",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const markAsRead = async (id: number) => {
    try {
      const response = await fetch(`${API_BASE}/markread.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      
      if (data.success) {
        setMessages(messages.map(m => 
          m.id === id ? { ...m, is_read: 1 } : m
        ));
        if (selectedMessage?.id === id) {
          setSelectedMessage({ ...selectedMessage, is_read: 1 });
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to mark message as read",
        variant: "destructive",
      });
    }
  };

  const deleteMessage = async (id: number) => {
    try {
      const response = await fetch(`${API_BASE}/deletemessage.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      
      if (data.success) {
        setMessages(messages.filter(m => m.id !== id));
        if (selectedMessage?.id === id) {
          setSelectedMessage(null);
        }
        toast({
          title: "Deleted",
          description: "Message deleted successfully",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete message",
        variant: "destructive",
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const unreadCount = messages.filter(m => !m.is_read).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft size={18} />
                Back to Site
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-foreground">Message Inbox</h1>
              <p className="text-sm text-muted-foreground">
                {unreadCount} unread message{unreadCount !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
          <Button onClick={fetchMessages} variant="outline" size="sm" disabled={loading}>
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
            Refresh
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Message List */}
          <div className="lg:col-span-1 space-y-2">
            {loading ? (
              <div className="text-center py-12 text-muted-foreground">
                Loading messages...
              </div>
            ) : messages.length === 0 ? (
              <div className="text-center py-12">
                <Mail className="mx-auto mb-4 text-muted-foreground" size={48} />
                <p className="text-muted-foreground">No messages yet</p>
              </div>
            ) : (
              messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    setSelectedMessage(message);
                    if (!message.is_read) {
                      markAsRead(message.id);
                    }
                  }}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    selectedMessage?.id === message.id
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card hover:border-primary/50"
                  } ${!message.is_read ? "border-l-4 border-l-primary" : ""}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className={`font-medium truncate ${!message.is_read ? "text-foreground" : "text-muted-foreground"}`}>
                        {message.name}
                      </p>
                      <p className="text-sm text-muted-foreground truncate">
                        {message.email}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {message.message}
                      </p>
                    </div>
                    {!message.is_read && (
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                    <Clock size={12} />
                    {formatDate(message.created_at)}
                  </p>
                </motion.div>
              ))
            )}
          </div>

          {/* Message Detail */}
          <div className="lg:col-span-2">
            {selectedMessage ? (
              <motion.div
                key={selectedMessage.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <User size={18} className="text-primary" />
                      <h2 className="text-xl font-semibold text-foreground">
                        {selectedMessage.name}
                      </h2>
                    </div>
                    <a
                      href={`mailto:${selectedMessage.email}`}
                      className="text-primary hover:underline"
                    >
                      {selectedMessage.email}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                      <Clock size={14} />
                      {formatDate(selectedMessage.created_at)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {!selectedMessage.is_read && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => markAsRead(selectedMessage.id)}
                      >
                        <Check size={16} />
                        Mark Read
                      </Button>
                    )}
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => deleteMessage(selectedMessage.id)}
                    >
                      <Trash2 size={16} />
                      Delete
                    </Button>
                  </div>
                </div>
                <div className="border-t border-border pt-6">
                  <p className="text-foreground whitespace-pre-wrap leading-relaxed">
                    {selectedMessage.message}
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <Button asChild>
                    <a href={`mailto:${selectedMessage.email}`}>
                      <Mail size={16} />
                      Reply via Email
                    </a>
                  </Button>
                </div>
              </motion.div>
            ) : (
              <div className="bg-card border border-border rounded-xl p-12 text-center">
                <Mail className="mx-auto mb-4 text-muted-foreground" size={64} />
                <p className="text-muted-foreground">
                  Select a message to view details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
