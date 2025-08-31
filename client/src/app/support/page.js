// app/support/page.js - FIXED VERSION
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Book,
  ChevronDown,
  ChevronUp,
  Clock,
  HelpCircle,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { api, ApiError } from "@/lib/api"; // FIXED IMPORT

export default function Support() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);

    try {
      await api.support.create(contactForm); // FIXED API CALL
      setSuccess(true);
      setContactForm({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      if (error instanceof ApiError) {
        setErrors(error.errors.length > 0 ? error.errors : [error.message]);
      } else {
        setErrors(["Something went wrong. Please try again."]);
      }
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    {
      question: "How does ParkEase work?",
      answer:
        "ParkEase uses smart sensors and AI to show real-time parking availability. Simply open the app, find nearby spots, reserve one with a tap, and navigate directly to your space.",
    },
    {
      question: "Is ParkEase available in my city?",
      answer:
        "We're currently launching in Dhaka, Bangladesh. Sign up for our waitlist to be notified when we expand to your city.",
    },
    {
      question: "How much does it cost to use ParkEase?",
      answer:
        "ParkEase charges a small service fee (typically 10-15% of parking cost) plus the regular parking rate. No monthly subscriptions required.",
    },
    {
      question: "Can I cancel my parking reservation?",
      answer:
        "Yes, you can cancel reservations up to 15 minutes before your booking time for a full refund. Late cancellations may incur a small fee.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, mobile banking (bKash, Nagad, Rocket), and digital wallets for seamless transactions.",
    },
    {
      question: "What if the parking spot is occupied when I arrive?",
      answer:
        "If your reserved spot is occupied, contact our support immediately. We'll find you an alternative spot nearby and provide compensation for any inconvenience.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes, we use bank-level encryption and comply with international security standards. Your payment information is never stored on our servers.",
    },
    {
      question: "Can I use ParkEase for long-term parking?",
      answer:
        "Currently, ParkEase focuses on short-term parking (up to 24 hours). Long-term parking solutions are coming in future updates.",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold">
          How Can We <span className="text-primary">Help You?</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Get quick answers to common questions or reach out to our support team
        </p>
      </section>

      {/* Quick Help Cards */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <HelpCircle className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>FAQ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Find answers to the most common questions about ParkEase
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Live Chat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Chat with our support team for real-time assistance
              </p>
              <Button className="mt-4" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Book className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>User Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Step-by-step guides to help you make the most of ParkEase
              </p>
              <Button className="mt-4" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="h-5 w-5 text-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-2">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email Support</h3>
                  <p className="text-sm text-muted-foreground">
                    hello@parkease.com
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Response within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-2">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Phone Support</h3>
                  <p className="text-sm text-muted-foreground">
                    +880 123 456 789
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Available during business hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-2">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Sunday - Thursday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Bangladesh Standard Time (BST)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Success Message */}
                {success && (
                  <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                    Your message has been sent successfully! We will get back to
                    you soon.
                  </div>
                )}

                {/* Error Messages */}
                {errors.length > 0 && (
                  <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                    <ul className="list-disc pl-5 space-y-1">
                      {errors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleContactChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="technical">Technical Issue</option>
                      <option value="billing">Billing Question</option>
                      <option value="feature">Feature Request</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactChange}
                      rows="4"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Describe your question or issue..."
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
