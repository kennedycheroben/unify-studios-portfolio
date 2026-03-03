import { useEffect, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { supabase } from "../lib/supabase";

type Message = {
  id: number;
  name: string;
  email: string;
  subject?: string | null;
  message: string;
  created_at?: string;
};

const AdminPortal = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching messages:", error);
        setError(error.message || "Failed to load messages");
      } else if (data) {
        setMessages(data as Message[]);
      }
      setLoading(false);
    };

    fetchMessages();
  }, []);

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-3xl font-display font-bold">Admin Portal</h1>
          <p className="text-muted-foreground">Messages submitted via the contact form</p>
        </AnimatedSection>

        <div className="glass-card p-6">
          {loading ? (
            <p>Loading messages…</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : messages.length === 0 ? (
            <p>No messages yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full table-auto text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Subject</th>
                    <th className="px-4 py-2">Message</th>
                    <th className="px-4 py-2">Received</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((m) => (
                    <tr key={m.id} className="border-t">
                      <td className="px-4 py-3 align-top">{m.id}</td>
                      <td className="px-4 py-3 align-top">{m.name}</td>
                      <td className="px-4 py-3 align-top">{m.email}</td>
                      <td className="px-4 py-3 align-top">{m.subject || "—"}</td>
                      <td className="px-4 py-3 align-top">{m.message}</td>
                      <td className="px-4 py-3 align-top">{m.created_at ? new Date(m.created_at).toLocaleString() : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminPortal;
