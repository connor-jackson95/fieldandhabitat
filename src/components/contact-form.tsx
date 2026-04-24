"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

type InquiryForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company: string;
};

const initialForm: InquiryForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "",
};

export function ContactForm() {
  const [form, setForm] = useState<InquiryForm>(initialForm);
  const [status, setStatus] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Unable to send inquiry.");
      }

      setStatus("success");
      setFeedback("Inquiry sent. We will review it and follow up by email.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error ? error.message : "Unable to send inquiry.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 rounded-[2rem] border border-border bg-card p-7 shadow-editorial sm:p-8"
    >
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        value={form.company}
        onChange={(event) =>
          setForm((current) => ({ ...current, company: event.target.value }))
        }
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="space-y-1.5 text-sm text-muted">
          <span>Name</span>
          <input
            required
            type="text"
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            className="h-12 w-full rounded-2xl border border-border bg-canvas px-4 text-ink outline-none"
          />
        </label>
        <label className="space-y-1.5 text-sm text-muted">
          <span>Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
            className="h-12 w-full rounded-2xl border border-border bg-canvas px-4 text-ink outline-none"
          />
        </label>
      </div>
      <label className="space-y-1.5 text-sm text-muted">
        <span>Subject</span>
        <input
          required
          type="text"
          value={form.subject}
          onChange={(event) =>
            setForm((current) => ({ ...current, subject: event.target.value }))
          }
          className="h-12 w-full rounded-2xl border border-border bg-canvas px-4 text-ink outline-none"
        />
      </label>
      <label className="space-y-1.5 text-sm text-muted">
        <span>Message</span>
        <textarea
          required
          value={form.message}
          onChange={(event) =>
            setForm((current) => ({ ...current, message: event.target.value }))
          }
          className="min-h-40 w-full rounded-[1.5rem] border border-border bg-canvas px-4 py-3 text-ink outline-none"
        />
      </label>
      <div className="flex items-center justify-between gap-3">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-pine px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#f5efe4] hover:bg-pine-deep disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Send Inquiry"}
        </button>
        {feedback ? (
          <p
            className={`text-sm ${
              status === "success" ? "text-pine" : "text-[#8b3a2b]"
            }`}
          >
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  );
}
