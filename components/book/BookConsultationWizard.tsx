"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  User,
  Briefcase,
  FileText,
  DollarSign,
  Calendar,
  MessageSquare,
  Check,
  ArrowLeft,
  ArrowRight,
  Loader,
} from "lucide-react";

type StepId = "basic" | "type" | "desc" | "budget" | "timeline" | "extra" | "success";

type FormState = {
  fullName: string;
  email: string;
  company: string;
  phone: string;

  projectType:
    | "Web Development"
    | "Mobile App"
    | "AI Solution"
    | "SaaS Platform"
    | "Marketing"
    | "Consulting"
    | "";

  description: string;

  budget: number;

  timeline:
    | "ASAP"
    | "1-3 months"
    | "3-6 months"
    | "6-12 months"
    | "12+ months"
    | "Flexible"
    | "";

  additional: string;
};

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

export default function BookConsultationWizard() {
  const steps = useMemo(
    () => [
      { id: "basic" as const, label: "Basic Info", Icon: User },
      { id: "type" as const, label: "Project Type", Icon: Briefcase },
      { id: "desc" as const, label: "Description", Icon: FileText },
      { id: "budget" as const, label: "Budget", Icon: DollarSign },
      { id: "timeline" as const, label: "Timeline", Icon: Calendar },
      { id: "extra" as const, label: "Additional Details", Icon: MessageSquare },
      // final screen
      { id: "success" as const, label: "Completed", Icon: MessageSquare },
    ],
    []
  );

  const [current, setCurrent] = useState(0);

  const [data, setData] = useState<FormState>({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    description: "",
    budget: 50000,
    timeline: "",
    additional: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const step = steps[current];
  const isSuccess = step.id === "success";

  // Progress based on the 6 visible steps (basic..extra), full on success
  const formStepsCount = 6;
  const progressPct = isSuccess
    ? 100
    : (Math.min(current, formStepsCount - 1) / (formStepsCount - 1)) * 100;

  const goPrev = () => setCurrent((v) => Math.max(0, v - 1));
  const goNext = () => setCurrent((v) => Math.min(steps.length - 1, v + 1));

  const isLastFormStep = step.id === "extra";

  return (
    <div className="mx-auto max-w-6xl px-4 pt-10 pb-24">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-violet-400">
          Book a Consultation
        </h1>
        <p className="mt-3 text-white/70">
          Let&apos;s discuss your project and find the perfect solution
        </p>
      </div>

{/* Stepper (line stays between circles like design) */}
<div className="mx-auto mt-10 max-w-5xl">
  <div className="relative">
    {/* We use padding so the line starts/ends at first/last circle center */}
    <div className="px-6 md:px-8">
      <div className="relative">
        {/* Base line (only between circles) */}
        <div className="absolute left-0 right-0 top-[24px] h-[3px] rounded-full bg-white/10" />

        {/* Progress line (only between circles) */}
        <div
          className="absolute left-0 top-[24px] h-[3px] rounded-full bg-emerald-500 transition-all"
          style={{ width: `${progressPct}%` }}
        />

        {/* Steps */}
        <div className="grid grid-cols-6">
          {steps.slice(0, 6).map((s, idx) => {
            const done = isSuccess ? true : idx < current;
            const active = !isSuccess && idx === current;

            return (
              <div key={s.id} className="flex flex-col items-center">
                <div
                  className={[
                    "relative z-10 grid h-12 w-12 place-items-center rounded-full border transition",
                    done
                      ? "bg-emerald-500 border-emerald-400"
                      : active
                      ? "bg-violet-500 border-violet-400"
                      : "bg-white/[0.04] border-white/10",
                  ].join(" ")}
                >
                  {done ? (
                    <Check className="h-5 w-5 text-white" />
                  ) : (
                    <s.Icon className="h-5 w-5 text-white/85" />
                  )}
                </div>

                <div
                  className={[
                    "mt-2 text-xs font-medium",
                    done || active ? "text-white/85" : "text-white/35",
                  ].join(" ")}
                >
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Main Card */}
      <div className="mx-auto mt-10 max-w-4xl">
        <div className="card soft-shadow rounded-2xl p-8 md:p-10">
          {!isSuccess ? (
            <>
              <h2 className="text-3xl font-extrabold text-white">
                {stepTitle(step.id)}
              </h2>

              <div className="mt-8">
                {step.id === "basic" && (
                  <BasicInfo
                    value={data}
                    onChange={(patch) => setData((d) => ({ ...d, ...patch }))}
                  />
                )}

                {step.id === "type" && (
                  <ProjectType
                    value={data.projectType}
                    onChange={(v) => setData((d) => ({ ...d, projectType: v }))}
                  />
                )}

                {step.id === "desc" && (
                  <Description
                    value={data.description}
                    onChange={(v) => setData((d) => ({ ...d, description: v }))}
                  />
                )}

                {step.id === "budget" && (
                  <Budget
                    value={data.budget}
                    onChange={(v) => setData((d) => ({ ...d, budget: v }))}
                  />
                )}

                {step.id === "timeline" && (
                  <Timeline
                    value={data.timeline}
                    onChange={(v) => setData((d) => ({ ...d, timeline: v }))}
                  />
                )}

                {step.id === "extra" && (
                  <Additional
                    value={data.additional}
                    onChange={(v) => setData((d) => ({ ...d, additional: v }))}
                  />
                )}
              </div>

              {/* Divider */}
              <div className="mt-10 h-px w-full bg-white/10" />

              {/* Actions */}
              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={goPrev}
                  disabled={current === 0}
                  className={[
                    "inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold transition",
                    current === 0
                      ? "bg-white/5 text-white/30 cursor-not-allowed"
                      : "bg-white/10 text-white/80 hover:bg-white/15",
                  ].join(" ")}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </button>

                <button
                  onClick={async () => {
                    if (!isLastFormStep) return goNext();
                    
                    // submit form
                    setIsSubmitting(true);
                    setSubmitError(null);
                    
                    try {
                      const response = await fetch('/api/submit-booking', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                      });

                      if (!response.ok) {
                        const error = await response.json();
                        throw new Error(error.error || 'Failed to submit booking');
                      }

                      goNext();
                    } catch (error) {
                      setSubmitError(error instanceof Error ? error.message : 'An error occurred');
                      setIsSubmitting(false);
                    }
                  }}
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white grad shadow-lg shadow-fuchsia-500/10 hover:opacity-95 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : isLastFormStep ? "Submit" : "Next"}
                  <ArrowRight className="h-4 w-4" />
                </button>
                
                {submitError && (
                  <div className="mt-4 rounded-lg bg-red-500/20 border border-red-500/30 p-3 text-red-200 text-sm">
                    {submitError}
                  </div>
                )}
              </div>
            </>
          ) : (
            <SuccessScreen />
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Step Titles ---------- */
function stepTitle(id: StepId) {
  switch (id) {
    case "basic":
      return "Basic Information";
    case "type":
      return "Project Type";
    case "desc":
      return "Project Description";
    case "budget":
      return "Estimated Project Budget";
    case "timeline":
      return "Project Timeline";
    case "extra":
      return "Additional Details";
    case "success":
      return "Thank You";
  }
}

/* ---------- Shared Input Style ---------- */
function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="text-sm font-semibold text-white/85">
        {label} {required ? <span className="text-white/60">*</span> : null}
      </div>
      {children}
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={[
        "w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white/90",
        "placeholder:text-white/30 outline-none",
        "focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/20 transition",
      ].join(" ")}
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={[
        "w-full min-h-[220px] rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white/90",
        "placeholder:text-white/30 outline-none",
        "focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/20 transition",
      ].join(" ")}
    />
  );
}

/* ---------- Step UIs ---------- */

function BasicInfo({
  value,
  onChange,
}: {
  value: FormState;
  onChange: (patch: Partial<FormState>) => void;
}) {
  return (
    <div className="grid gap-6">
      <Field label="Full Name" required>
        <Input
          placeholder="John Doe"
          value={value.fullName}
          onChange={(e) => onChange({ fullName: e.target.value })}
        />
      </Field>

      <Field label="Email Address" required>
        <Input
          placeholder="john@company.com"
          value={value.email}
          onChange={(e) => onChange({ email: e.target.value })}
        />
      </Field>

      <Field label="Company Name">
        <Input
          placeholder="Your Company Inc."
          value={value.company}
          onChange={(e) => onChange({ company: e.target.value })}
        />
      </Field>

      <Field label="Phone Number">
        <Input
          placeholder="+1 (555) 123-4567"
          value={value.phone}
          onChange={(e) => onChange({ phone: e.target.value })}
        />
      </Field>
    </div>
  );
}

function ProjectType({
  value,
  onChange,
}: {
  value: FormState["projectType"];
  onChange: (v: FormState["projectType"]) => void;
}) {
  const options: FormState["projectType"][] = [
    "Web Development",
    "Mobile App",
    "AI Solution",
    "SaaS Platform",
    "Marketing",
    "Consulting",
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {options.map((opt) => {
        const selected = value === opt;
        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={[
              "rounded-xl border px-6 py-4 text-center font-semibold transition",
              selected
                ? "border-transparent grad text-white shadow-lg shadow-fuchsia-500/10"
                : "border-white/10 bg-white/[0.04] text-white/80 hover:bg-white/[0.07]",
            ].join(" ")}
            type="button"
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function Description({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid gap-3">
      <div className="text-sm font-semibold text-white/85">
        Tell us about your project <span className="text-white/60">*</span>
      </div>
      <Textarea
        placeholder="Describe your project goals, requirements, and any specific features you have in mind..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function Budget({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const min = 5000;
  const max = 1_000_000;

  const pretty = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);

  const quick = [5000, 10000, 25000, 50000, 100000, 250000, 500000, 1000000];

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div className="text-sm font-semibold text-white/85">Budget Range</div>
        <div className="text-2xl font-extrabold text-violet-400">{pretty}</div>
      </div>

      <div className="space-y-2">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full accent-violet-500"
        />
        <div className="flex justify-between text-xs text-white/45">
          <span>€5k</span>
          <span>€1M</span>
        </div>
      </div>

      <div className="text-sm font-semibold text-white/75">Quick Select:</div>

      <div className="grid gap-3 sm:grid-cols-4">
        {quick.map((q) => {
          const selected = q === value;
          return (
            <button
              key={q}
              type="button"
              onClick={() => onChange(clamp(q, min, max))}
              className={[
                "rounded-xl px-4 py-3 text-sm font-semibold transition",
                selected
                  ? "grad text-white shadow-lg shadow-fuchsia-500/10"
                  : "bg-white/[0.08] text-white/75 hover:bg-white/[0.11]",
              ].join(" ")}
            >
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 0,
              }).format(q)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Timeline({
  value,
  onChange,
}: {
  value: FormState["timeline"];
  onChange: (v: FormState["timeline"]) => void;
}) {
  const options: FormState["timeline"][] = [
    "ASAP",
    "1-3 months",
    "3-6 months",
    "6-12 months",
    "12+ months",
    "Flexible",
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {options.map((opt) => {
        const selected = value === opt;
        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={[
              "rounded-xl border px-6 py-4 text-center font-semibold transition",
              selected
                ? "border-transparent grad text-white shadow-lg shadow-fuchsia-500/10"
                : "border-white/10 bg-white/[0.04] text-white/80 hover:bg-white/[0.07]",
            ].join(" ")}
            type="button"
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function Additional({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid gap-3">
      <div className="text-sm font-semibold text-white/85">
        Anything else we should know?
      </div>
      <Textarea
        placeholder="Share any extra context, constraints, or links (optional)..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function SuccessScreen() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-6 grid h-20 w-20 place-items-center rounded-full bg-emerald-500">
        <Check className="h-10 w-10 text-white" />
      </div>

      <h2 className="text-4xl font-extrabold text-white">Thank You!</h2>

      <p className="mt-3 max-w-md text-white/70">
        We&apos;ve received your consultation request and will get back to you within 24 hours.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl grad px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
