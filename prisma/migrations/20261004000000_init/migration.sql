-- CreateTable
CREATE TABLE "applications" (
    "id" TEXT NOT NULL,
    "association_name" TEXT NOT NULL,
    "rna_number" TEXT,
    "mission_theme" TEXT NOT NULL,
    "location_dept" TEXT,
    "location_city" TEXT,
    "team_size" TEXT,
    "annual_budget" DOUBLE PRECISION,
    "contact_name" TEXT NOT NULL,
    "contact_role" TEXT NOT NULL,
    "contact_email" TEXT NOT NULL,
    "contact_phone" TEXT,
    "problem_description" TEXT NOT NULL,
    "tools_used" TEXT,
    "urgency" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "applications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "volunteer_signups" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "skills" TEXT NOT NULL,
    "hours_per_week" INTEGER NOT NULL,
    "motivation" TEXT NOT NULL,
    "linkedin_or_portfolio" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "volunteer_signups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ngos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rna_or_siren" TEXT,
    "website" TEXT,
    "description" TEXT NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'France',
    "region" TEXT,
    "department" TEXT,
    "commune" TEXT,
    "operating_regions" TEXT NOT NULL,
    "themes" TEXT NOT NULL,
    "beneficiaries" TEXT NOT NULL,
    "annual_budget" DOUBLE PRECISION,
    "requested_funding_min" DOUBLE PRECISION,
    "requested_funding_max" DOUBLE PRECISION,
    "years_operating" INTEGER,
    "registration_status" TEXT NOT NULL DEFAULT 'Association loi 1901',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ngos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grants" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "funder" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "funding_min" DOUBLE PRECISION,
    "funding_max" DOUBLE PRECISION,
    "currency" TEXT NOT NULL DEFAULT 'EUR',
    "deadline" TIMESTAMP(3),
    "is_recurrent" BOOLEAN NOT NULL DEFAULT false,
    "recurrent_details" TEXT,
    "geographic_level" TEXT NOT NULL DEFAULT 'national',
    "eligible_regions" TEXT NOT NULL,
    "eligible_departments" TEXT,
    "eligible_org_types" TEXT NOT NULL,
    "themes" TEXT NOT NULL,
    "beneficiaries" TEXT NOT NULL,
    "requirements" TEXT NOT NULL,
    "operating_history_required" INTEGER,
    "source_domain" TEXT NOT NULL,
    "source_id" TEXT,
    "discovered_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_checked_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'active',
    "verified_at" TIMESTAMP(3),

    CONSTRAINT "grants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grant_matches" (
    "id" TEXT NOT NULL,
    "ngo_id" TEXT NOT NULL,
    "grant_id" TEXT NOT NULL,
    "total_score" DOUBLE PRECISION NOT NULL,
    "theme_score" DOUBLE PRECISION NOT NULL,
    "geography_score" DOUBLE PRECISION NOT NULL,
    "eligibility_score" DOUBLE PRECISION NOT NULL,
    "funding_score" DOUBLE PRECISION NOT NULL,
    "beneficiary_score" DOUBLE PRECISION NOT NULL,
    "explanation" TEXT NOT NULL,
    "risks" TEXT NOT NULL,
    "recommendation" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "grant_matches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "search_runs" (
    "id" TEXT NOT NULL,
    "ngo_id" TEXT,
    "query" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "number_results" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "search_runs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rate_limits" (
    "key" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 1,
    "reset_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rate_limits_pkey" PRIMARY KEY ("key")
);

-- CreateIndex
CREATE UNIQUE INDEX "grants_url_key" ON "grants"("url");

-- CreateIndex
CREATE UNIQUE INDEX "grant_matches_ngo_id_grant_id_key" ON "grant_matches"("ngo_id", "grant_id");

-- AddForeignKey
ALTER TABLE "grant_matches" ADD CONSTRAINT "grant_matches_ngo_id_fkey" FOREIGN KEY ("ngo_id") REFERENCES "ngos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grant_matches" ADD CONSTRAINT "grant_matches_grant_id_fkey" FOREIGN KEY ("grant_id") REFERENCES "grants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "search_runs" ADD CONSTRAINT "search_runs_ngo_id_fkey" FOREIGN KEY ("ngo_id") REFERENCES "ngos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

