"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Mail, Phone, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { formatCurrency } from "@/lib/utils";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 2,
    specialRequests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    alert("Booking request submitted! We'll contact you shortly.");
    // Add your booking logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const pricePerNight = 450;
  const nights = 3;
  const subtotal = pricePerNight * nights;
  const serviceFee = subtotal * 0.1;
  const total = subtotal + serviceFee;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold mb-4">Book Your Stay</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete the form below to reserve your mountain retreat
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Booking Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="h-12"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <Mail className="w-4 h-4 inline mr-2" />
                            Email *
                          </label>
                          <Input
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="h-12"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <Phone className="w-4 h-4 inline mr-2" />
                            Phone *
                          </label>
                          <Input
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 123-4567"
                            className="h-12"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Booking Details */}
                  <div className="border-t pt-6">
                    <h2 className="text-2xl font-bold mb-6">Booking Details</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <Calendar className="w-4 h-4 inline mr-2" />
                            Check-in Date *
                          </label>
                          <Input
                            name="checkIn"
                            type="date"
                            required
                            value={formData.checkIn}
                            onChange={handleChange}
                            className="h-12"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <Calendar className="w-4 h-4 inline mr-2" />
                            Check-out Date *
                          </label>
                          <Input
                            name="checkOut"
                            type="date"
                            required
                            value={formData.checkOut}
                            onChange={handleChange}
                            className="h-12"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          <Users className="w-4 h-4 inline mr-2" />
                          Number of Guests *
                        </label>
                        <select
                          name="guests"
                          required
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full h-12 px-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? "Guest" : "Guests"}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          <MessageSquare className="w-4 h-4 inline mr-2" />
                          Special Requests
                        </label>
                        <textarea
                          name="specialRequests"
                          value={formData.specialRequests}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Any special requirements or requests..."
                          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-nature-pine hover:bg-nature-pine/90"
                  >
                    Confirm Booking
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By clicking "Confirm Booking", you agree to our terms and conditions
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Price Summary */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="sticky top-24">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Price Summary</h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {formatCurrency(pricePerNight)} x {nights} nights
                      </span>
                      <span className="font-semibold">{formatCurrency(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service fee</span>
                      <span className="font-semibold">{formatCurrency(serviceFee)}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>{formatCurrency(total)}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Badge variant="outline" className="w-full justify-center py-2">
                      ✓ Free cancellation
                    </Badge>
                    <Badge variant="outline" className="w-full justify-center py-2">
                      ✓ Best price guarantee
                    </Badge>
                    <Badge variant="outline" className="w-full justify-center py-2">
                      ✓ Instant confirmation
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6 bg-nature-pine text-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm text-white/90 mb-4">
                    Our team is here to assist you with your booking
                  </p>
                  <Button variant="secondary" className="w-full">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}