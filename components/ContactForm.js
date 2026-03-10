'use client';

import { useState } from 'react';

const initialData = {
  name: '',
  email: '',
  message: ''
};

function getValidationErrors(data) {
  const validationErrors = {};

  if (!data.name.trim()) {
    validationErrors.name = 'El nombre es requerido';
  } else if (data.name.trim().length < 2) {
    validationErrors.name = 'El nombre debe tener al menos 2 caracteres';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    validationErrors.email = 'El correo electrónico es requerido';
  } else if (!emailRegex.test(data.email)) {
    validationErrors.email = 'Ingresa un correo electrónico válido';
  }

  if (!data.message.trim()) {
    validationErrors.message = 'El mensaje es requerido';
  } else if (data.message.trim().length < 10) {
    validationErrors.message = 'El mensaje debe tener al menos 10 caracteres';
  }

  return validationErrors;
}

export default function ContactForm() {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };

    setFormData(updatedData);
    setErrors(getValidationErrors(updatedData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = getValidationErrors(formData);
    setErrors(validationErrors);
    setFeedback({ type: '', text: '' });

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'No se pudo enviar el mensaje. Inténtalo nuevamente.');
      }

      setFeedback({
        type: 'success',
        text: result.message || '¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.'
      });
      setFormData(initialData);
      setErrors({});
    } catch (error) {
      setFeedback({
        type: 'error',
        text: error.message || 'Ocurrió un error al enviar el formulario.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4 text-left" noValidate>
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
          Nombre completo *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Tu nombre completo"
          className={`w-full rounded-xl border bg-white px-4 py-3 outline-none ring-gold transition focus:ring ${
            errors.name ? 'border-red-500' : 'border-slate-300'
          }`}
          aria-describedby={errors.name ? 'name-error' : undefined}
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
          Correo corporativo *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          className={`w-full rounded-xl border bg-white px-4 py-3 outline-none ring-gold transition focus:ring ${
            errors.email ? 'border-red-500' : 'border-slate-300'
          }`}
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
          ¿Qué necesitas resolver? *
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe tu caso legal..."
          className={`w-full resize-none rounded-xl border bg-white px-4 py-3 outline-none ring-gold transition focus:ring ${
            errors.message ? 'border-red-500' : 'border-slate-300'
          }`}
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {feedback.text && (
        <p
          className={`rounded-lg px-4 py-3 text-sm ${
            feedback.type === 'success'
              ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
              : 'border border-red-200 bg-red-50 text-red-700'
          }`}
          role="status"
        >
          {feedback.text}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-xl bg-gold px-6 py-3 font-semibold text-navy transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
      </button>
    </form>
  );
}
