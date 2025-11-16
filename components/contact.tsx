"use client";

import React, { useState } from "react";

interface FormData {
  nom: string;
  email: string;
  telephone: string;
  typeProjet: string;
  budget: string;
  description: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    email: "",
    telephone: "",
    typeProjet: "",
    budget: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">(
    ""
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (
      !formData.nom ||
      !formData.email ||
      !formData.telephone ||
      !formData.typeProjet ||
      !formData.description
    ) {
      setMessage("Tous les champs requis doivent être remplis");
      setMessageType("error");
      return false;
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setMessage("Format d'email invalide");
      setMessageType("error");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          date: new Date().toLocaleString("fr-TN"),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(
          "Votre demande a été envoyée avec succès ! Nous vous contacterons dans les plus brefs délais."
        );
        setMessageType("success");

        setFormData({
          nom: "",
          email: "",
          telephone: "",
          typeProjet: "",
          budget: "",
          description: "",
        });

        setTimeout(() => {
          setMessage("");
        }, 5000);
      } else {
        setMessage(
          result.error ||
            "Une erreur est survenue lors de l'envoi. Veuillez réessayer."
        );
        setMessageType("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage(
        "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement."
      );
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        {message && (
          <div
            style={{
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "4px",
              backgroundColor:
                messageType === "success" ? "#d4edda" : "#f8d7da",
              color: messageType === "success" ? "#155724" : "#721c24",
              border: `1px solid ${
                messageType === "success" ? "#c3e6cb" : "#f5c6cb"
              }`,
              fontSize: "14px",
            }}
            role="alert"
          >
            {message}
          </div>
        )}

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="nom"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Nom *
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
            placeholder="Votre nom complet"
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="email"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
            placeholder="votre.email@example.com"
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="telephone"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Téléphone *
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
            placeholder="XXX XXX XXX"
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="typeProjet"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Type de projet *
          </label>
          <select
            id="typeProjet"
            name="typeProjet"
            value={formData.typeProjet}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
          >
            <option style={{ color: "#000000ff" }} value="">
              Sélectionnez un type de projet
            </option>
            <option style={{ color: "#000000ff" }} value="Construction">
              Construction
            </option>
            <option style={{ color: "#000000ff" }} value="Rénovation">
              Rénovation
            </option>
            <option style={{ color: "#000000ff" }} value="Extension">
              Extension
            </option>
            <option style={{ color: "#000000ff" }} value="Aménagement">
              Aménagement
            </option>
            <option style={{ color: "#000000ff" }} value="Autre">
              Autre
            </option>
          </select>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="budget"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Budget (optionnel)
          </label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
            placeholder="$$$ - $$$"
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="description"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Description du projet *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "14px",
              boxSizing: "border-box",
              minHeight: "150px",
              fontFamily: "Arial, sans-serif",
            }}
            placeholder="Décrivez votre projet en détail..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: loading ? "#ccc" : "#ff9d3a",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => {
            if (!loading)
              (e.target as HTMLButtonElement).style.backgroundColor = "#e68a2e";
          }}
          onMouseLeave={(e) => {
            if (!loading)
              (e.target as HTMLButtonElement).style.backgroundColor = "#ff9d3a";
          }}
        >
          {loading ? "Envoi en cours..." : "Envoyer ma demande"}
        </button>
      </form>
    </div>
  );
}
