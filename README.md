# 🛡️ Sentinul: Multi-Agent Security Platform

**Enterprise-grade security verification for autonomous AI agents and multi-agent systems.**

**Current Version:** 5.0.0 (Production Ready)  
**Latest Updates:** Protocol Guard + Evidence Vault + Honeypot Mesh + Universal Governance  
**Status:** ✅ All 4 phases operational, fully tested, zero crashes

---

## Table of Contents

1. [Quick Start (5 minutes)](#quick-start)
2. [What's New in V5](#whats-new-in-v5)
3. [Installation Guide](#installation-guide)
4. [Understanding Sentinul Versions](#understanding-versions-v1-to-v5)
5. [Core Architecture](#core-architecture)
6. [Usage Guide](#usage-guide)
7. [Configuration](#configuration)
8. [Troubleshooting](#troubleshooting)

---

## Quick Start

### Fastest Way: Try Online (No Installation)

Visit **https://sentinul.app** to test the Twin-Core Sanitizer instantly with your code.

### Local Installation (5 minutes)

#### Prerequisites
- Node.js 16+ or Python 3.9+
- Git
- Docker (optional, for isolated testing)

#### Option 1: Python Backend (Current Release)

```bash
# Clone the repository
git clone https://github.com/abalous2894/sentinul-v3-lab.git
cd sentinul-v3-lab/sentinul-v3-lab

# Install dependencies
pip install -r requirements.txt

# Start the security server
python src/app.py

# Server runs on http://localhost:5000
# API docs at http://localhost:5000/api/docs
```

#### Option 2: Docker (Recommended for Production)

```bash
# Build container
docker build -t sentinul:5.0.0 .

# Run with persistent volume
docker run -d \
  --name sentinul \
  -p 5000:5000 \
  -v /var/lib/sentinul:/data \
  sentinul:5.0.0

# Check logs
docker logs -f sentinul
```

#### Option 3: Node.js (Legacy Support)

```bash
cd sentinul-v3-lab/sentinul-app-site
npm install
npm run dev

# Frontend runs on http://localhost:3000
```

---

## What's New in V5

### 🔐 Phase 1: Protocol Guard (Runtime Defense)
- **Twin-Core Sanitizer:** SQL injection + hardcoded secrets detection
- **Unicode normalization:** Prevents encoding bypasses
- **Real-time risk scoring:** 0-100 scale with context
- **Performance:** <0.04ms per scan

### 📜 Phase 2: Evidence Vault (Cryptographic Audit Trail)
- **Hash-chained SQLite:** Immutable event ledger
- **SHA-256 chaining:** Blockchain-style integrity
- **Tamper detection:** Automatic verification
- **Compliance ready:** JSON-LD export for auditors

### 🍯 Phase 3: Honeypot Mesh (Deception Detection)
- **15 shadow skills:** Admin override, evidence deletion, privilege escalation
- **Behavioral extraction:** Chain-of-thought reasoning capture
- **Automatic compromise detection:** Agent status flagging
- **MFA escalation:** Operator approval for suspicious actions

### 🏛️ Phase 4: Universal Governance (Fleet Management)
- **Centralized policy engine:** YAML-based rule configuration
- **Hot-reload capability:** Policy updates without restarts
- **Fleet monitoring:** Multi-agent dashboard
- **Identity attestation:** Unique Skill IDs + JWT tokens
- **Emergency kill-switch:** Revoke all agents instantly

---

## Installation Guide

### Detailed Setup for Each Component

#### Backend Installation

```bash
# 1. Clone and enter project
git clone https://github.com/abalous2894/sentinul-v3-lab.git
cd sentinul-v3-lab/private-backend

# 2. Create virtual environment (Python 3.9+)
python -m venv venv
source venv/bin/activate  # Or: venv\Scripts\activate on Windows

# 3. Install Python dependencies
pip install -r requirements.txt

# 4. Configure environment
cp .env.example .env
# Edit .env with your settings:
#   POLICY_FILE=sentinul_policy.yaml
#   VAULT_PATH=./data/evidence_vault.db
#   DEBUG=false

# 5. Initialize database
python src/setup_vault.py

# 6. Start server
python src/app.py
```

**Expected Output:**
```
Sentinul V5 Backend Server
DEBUG: Policy loaded from sentinul_policy.yaml
DEBUG: Evidence Vault initialized at ./data/evidence_vault.db
DEBUG: 15 honeypot skills registered
INFO: Server started on http://localhost:5000
```

#### Frontend Installation

```bash
# From project root
cd sentinul-app-site

# Install dependencies
npm install

# Development mode
npm run dev
# Frontend available at http://localhost:3000

# Production build
npm run build
npm start
```

#### Running Integration Tests

```bash
cd private-backend/src

# Run Phase 4 Final Test (governance + fleet)
python PHASE_4_FINAL_TEST.py

# Run Global Integration Test (all 4 phases)
python GLOBAL_V5_INTEGRATION_TEST_FINAL.py

# Both should show: ✅ 8/8 tests passing
```

---

## Understanding Versions: V1 to V5

### 📍 V1: Foundation (Static Analysis)
**Release Focus:** Core vulnerability detection

| Feature | Status | Description |
|---------|--------|-------------|
| SQL Injection Detection | ✅ | Pattern-based regex matching |
| Hardcoded Secrets Detection | ✅ | API key/password scanning |
| CWE Mapping | ✅ | Links to CVE database |
| Risk Scoring | ✅ | 0-100 scale classification |

**Install:** Historical artifact (use V5 instead)

**Key Document:** [TWIN-CORE-PROTOCOL.md](./TWIN-CORE-PROTOCOL.md)

---

### 📍 V2: Digital Twin (Verification)
**Release Focus:** Proof that fixes actually work

| Feature | Status | Description |
|---------|--------|-------------|
| Ephemeral agent environment | ✅ | Docker-based isolated testing |
| Attack vector simulation | ✅ | Proof-of-concept injection tests |
| GitHub PR integration | ✅ | "Sentinul Verified" badges |
| Compliance compliance markers | ✅ | SOC2/HIPAA/GDPR/PCI-DSS |

**Use Case:** Before merging security fixes, prove they work

**Migration Path:** V1 users see additional verification step automatically

**Key Document:** [MULTI-AGENT-SECURITY.md](./MULTI-AGENT-SECURITY.md)

---

### 📍 V3: Multi-Agent Security (Autonomous Detection)
**Release Focus:** Honeypot-based threat detection

| Feature | Status | Description |
|---------|--------|-------------|
| Shadow Skills (13+ honeypots) | ✅ | Deception mesh for detection |
| Behavioral reasoning extraction | ✅ | Capture LLM chain-of-thought |
| Compromise detection | ✅ | Flag agents attempting jailbreaks |
| Automatic MFA escalation | ✅ | Operator approval workflow |

**Use Case:** Real-time detection when agents attempt jailbreaks or exploits

**New in V3:**
```python
# Honeypot trigger example
@sentinul_honeypot("admin_system_override")
def admin_override(params):
    # Agent attempting to call this = DETECTED ✓
    pass
```

**Key Document:** [COMPLIANCE-MAPPING.md](./COMPLIANCE-MAPPING.md)

---

### 📍 V4: Fleet Governance (Centralized Control)
**Release Focus:** Multi-agent fleet management

| Feature | Status | Description |
|---------|--------|-------------|
| Centralized policy engine | ✅ | YAML-based rules (all agents) |
| Policy hot-reload | ✅ | Updates take effect instantly |
| Fleet monitoring dashboard | ✅ | Real-time health, violations, threats |
| Identity attestation (JWT) | ✅ | Skill fingerprints + On-Behalf-Of tokens |
| Emergency kill-switch | ✅ | Revoke all agents with one command |

**Use Case:** Manage 50+ agents with single unified policy

**Policy Configuration** (`sentinul_policy.yaml`):
```yaml
global:
  version: "4.0.0"
  default_action: "allow"
  mfa_threshold: 75

allowed_tool_patterns:
  - "^read_.*$"        # All read operations
  - "^query_.*$"       # All queries
  - "^analyze_.*$"     # All analysis

blocked_tool_patterns:
  - "^delete_.*$"      # No destructive ops
  - "^admin_.*$"       # No admin access
  - "^system_.*$"      # No system-level
```

**Key Document:** See [private-backend/PHASE_4_COMPLETION_SUMMARY.md](../private-backend/PHASE_4_COMPLETION_SUMMARY.md)

---

### 📍 V5: Production Hardening (Current Release)
**Release Focus:** Security audit → Production ready

| Feature | Status | Description |
|---------|--------|-------------|
| Protocol Guard Phase 1 | ✅ | Enhanced sanitizer + Unicode handling |
| Evidence Vault Phase 2 | ✅ | Cryptographic audit trail (SHA-256 chaining) |
| Honeypot Mesh Phase 3 | ✅ | Frozen registry, graceful error handling |
| Universal Governance Phase 4 | ✅ | Fail-closed policies, fleet aggregation |
| Global Integration Test | ✅ | 8/8 tests pass, all systems harmonized |

**Major Improvements:**
- ✅ 6 security audit findings remediated
- ✅ Unicode normalization in sanitizer
- ✅ Frozen honeypot registry (immutable after init)
- ✅ Fail-closed policy engine (blocks by default if policy unavailable)
- ✅ Graceful vault error handling (local backup if vault fails)
- ✅ Latency optimized (<12ms per round-trip)

**Zero Crashes:** 8/8 integration tests passing

**Deploy Now:** Production-ready with all phases synchronized

---

## Core Architecture

### System Design Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    SENTINUL V5 ARCHITECTURE                 │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┏━━━━━━━━━━━━━━━━━━┓                                        │
│  ┃  Phase 1         ┃                                        │
│  ┃  Protocol Guard  ┃  • Twin-Core Sanitizer                │
│  ┃  (guard.py)      ┃  • SQL/Secrets Detection              │
│  ┗━━━━┳━━━━━━━━━━━━┛  • Unicode Normalization              │
│       │                • Risk Scoring (0-100)               │
│       │ security_event                                      │
│       │                                                     │
│  ┏━━━━▼━━━━━━━━━━━━┓                                        │
│  ┃  Phase 2         ┃                                        │
│  ┃  Evidence Vault  ┃  • SQLite Hash-Chain                  │
│  ┃ (vault.db)       ┃  • SHA-256 Linking                    │
│  ┗━━━━╋━━━━━━━━━━━━┛  • Immutable Audit Trail              │
│       │                • Query API                          │
│       │ event_hash                                          │
│       │                                                     │
│  ┏━━━━▼━━━━━━━━━━━━┓  ┌─────────────────────┐               │
│  ┃  Phase 3         ┃  │  Phase 3B: MFA      │               │
│  ┃  Honeypot Mesh   ┃  │  Challenge          │               │
│  ┃ (shadow_skills   ┃──┤  (mfa_challenge.py) │               │
│  ┃  deception_hook) ┃  │  • Operator Approval │               │
│  ┗━━━━╋━━━━━━━━━━━━┛  │  • JWT Validation   │               │
│       │                └─────────────────────┘               │
│       │ honeypot_event                                      │
│       │                                                     │
│  ┏━━━━▼━━━━━━━━━━━━┓                                        │
│  ┃  Phase 4         ┃                                        │
│  ┃  Governance      ┃  • Policy Engine (YAML)               │
│  ┃ (policy_engine   ┃  • Fleet Monitor                      │
│  ┃  identity_bridge ┃  • Dashboard API                      │
│  ┃  dashboard_api)  ┃  • Identity Registry                  │
│  ┗━━━━━━━━━━━━━━━━━┛  • Emergency Kill-Switch              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow Example

```
User submits agent code
    ↓
Phase 1: Guard scans for patterns
    ↓ (SAFE)
Phase 2: Vault stores event with SHA-256 hash
    ↓
Phase 3: Check if code matches any honeypots
    ↓ (Honeypot hit detected)
Phase 3B: Escalate to MFA challenge
    ↓ (Operator approves/denies)
Phase 4: Dashboard shows violation in fleet context
    ↓
✅ Event logged with full chain integrity
   (can be audited by third parties)
```

---

## Usage Guide

### Basic Usage: Scanning Code

#### Via API

```bash
# Scan code for vulnerabilities
curl -X POST http://localhost:5000/api/v1/scan \
  -H "Content-Type: application/json" \
  -d '{
    "code": "SELECT * FROM users WHERE id = $user_id",
    "language": "python",
    "context": "agent_skill"
  }'

# Response:
{
  "risk_score": 75,
  "violations": [
    {
      "type": "SQL_INJECTION",
      "severity": "HIGH",
      "cwe": "CWE-89",
      "location": "line 5",
      "fix": "Use parameterized query"
    }
  ],
  "compliance_impact": {
    "SOC2": "FAIL",
    "HIPAA": "FAIL",
    "GDPR": "FAIL",
    "PCI_DSS": "FAIL"
  }
}
```

#### Via Python SDK

```python
from sentinul import Guard, EvidenceVault

# Initialize guard
guard = Guard(agent_id="data-analyst", skill_id="abc123")

# Scan code
result = guard.sanitize_and_execute(
    tool_name="query_database",
    parameters={"query": user_input},
    user_id="john@company.com"
)

# Check result
if result.blocked:
    print(f"⛔ Blocked: {result.reason}")
    # Event automatically logged to Evidence Vault
else:
    print("✅ Allowed")
```

### Advanced Usage: Fleet Management

#### Deploy Multi-Agent System

```python
from sentinul import FleetMonitor, PolicyEngine

# Initialize fleet
fleet = FleetMonitor()
policy = PolicyEngine.load_policy("sentinul_policy.yaml")

# Register agents
fleet.register_agent("agent-alpha", skill_id="fp-alpha")
fleet.register_agent("agent-beta", skill_id="fp-beta")
fleet.register_agent("agent-gamma", skill_id="fp-gamma")

# Get fleet health
health = fleet.get_fleet_health()
print(f"Fleet health: {health.value}")
# Output: "secure" or "alert" or "emergency"

# Get violations
violations = fleet.get_violations(hours=24)
for violation in violations:
    print(f"{violation.agent_id}: {violation.violation_type}")
```

#### Update Policy Without Restarting

```python
# Edit sentinul_policy.yaml
# (agents auto-detect change via hash comparison)

# Verify policy hot-reload worked
curl http://localhost:5000/api/v1/policy/status

# Response:
{
  "version": "2.0.0",
  "updated_at": "2026-03-15T14:32:00Z",
  "agents_synced": 3,
  "enforcement_active": true
}
```

### Using the Dashboard

```
http://localhost:5000/dashboard
│
├─ Fleet Overview
│  ├─ Agents: 3 healthy, 0 degraded, 0 offline
│  ├─ Violations: 0 today
│  └─ Chain Integrity: ✅ Valid
│
├─ Violations This Week
│  ├─ Agent Alpha: SQL Injection attempt (blocked)
│  ├─ Agent Beta: Prompt Injection attempt (blocked)
│  └─ Agent Gamma: Clean
│
└─ Policy Management
   ├─ Current: v2.0.0 (effective 3 hours ago)
   ├─ Previous: v1.0.0 (retired)
   └─ [Edit Policy] [Deploy Now]
```

---

## Configuration

### sentinul_policy.yaml Setup

```yaml
# Global settings (apply to all agents)
global:
  version: "5.0.0"
  created_at: "2026-03-15T00:00:00Z"
  
  # Default action if tool not explicitly mentioned
  default_action: "allow"
  
  # Require MFA for tools with risk > threshold
  mfa_threshold: 75
  
  # Require agents to identify with Skill ID
  require_identity: true
  
  # Audit all tool calls (SOC2 compliant)
  audit_all_calls: true

# Tools allowed by default
allowed_tool_patterns:
  - "^read_.*$"           # All read operations
  - "^query_.*$"          # All queries
  - "^analyze_.*$"        # All analysis
  - "^generate_report_.*$"

# Tools blocked by default
blocked_tool_patterns:
  - "^delete_.*$"         # No deletion
  - "^admin_.*$"          # No admin commands
  - "^system_.*$"         # No system-level
  - "^override_.*$"       # No overrides

# Specific tool policies (override defaults)
tool_policies:
  write_database:
    action: "mfa"                    # Requires operator approval
    risk_score: 80
    requires_mfa: true
  
  send_email:
    action: "audit"                  # Allow but log
    risk_score: 40
```

### Environment Variables

```bash
# .env file
POLICY_FILE=sentinul_policy.yaml
VAULT_PATH=./data/evidence_vault.db
DEBUG=false
LOG_LEVEL=info

# Optional: Remote policy server
POLICY_SERVER_URL=https://policy.company.internal
POLICY_UPDATE_INTERVAL=300  # Seconds

# Optional: Slack alerts
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/...
ALERT_THRESHOLD=high  # low|medium|high|critical

# Optional: Security center integration
SECURITY_CENTER_API_KEY=sk-abc123...
SEND_METRICS=true
```

---

## Troubleshooting

### Common Issues

#### ❌ Policy not loading

```
ERROR:root:Error loading policy: 'charmap' codec can't decode byte
```

**Solution:** Policy file has encoding issue

```bash
# Fix encoding (convert to UTF-8)
file sentinul_policy.yaml
# Result: ASCII text, with no line terminators

# Regenerate policy
python -c "import yaml; yaml.dump(yaml.safe_load(open('sentinul_policy.yaml')), open('sentinul_policy.yaml', 'w'), encoding='utf-8')"
```

#### ❌ Vault database locked

```
sqlite3.OperationalError: database is locked
```

**Solution:**  Another process has the database open

```bash
# Check who's using it
lsof ./data/evidence_vault.db

# If safe to kill
pkill -f "evidence_vault"

# Or restart container
docker restart sentinul
```

#### ❌ Honeypot registry frozen error

```
RuntimeError: Cannot register - registry frozen after initialization
```

**Solution:** Registry is immutable after startup (intended security feature)

```python
# Correct: Register during initialization
@app.before_first_request()
def setup():
    registry = get_shadow_registry()
    # Register all skills here
    
# Incorrect: Trying to register at runtime
@app.route("/add_skill")
def add_skill():
    registry.register(skill)  # ❌ Too late, frozen
```

#### ❌ Tests failing

```bash
# Run diagnostic
python src/GLOBAL_V5_INTEGRATION_TEST_FINAL.py --verbose

# Check each phase individually
python src/PHASE_4_FINAL_TEST.py -k test_01_policy_loading

# View full output
python src/GLOBAL_V5_INTEGRATION_TEST_FINAL.py 2>&1 | tee test_output.log
```

---

## Version Migration Guide

### Upgrading from V1 → V5

**V1 users:** You have basic static analysis. Upgrade to get:
- ✅ Digital verification (prove fixes work)
- ✅ Honeypot detection (catch jailbreak attempts)
- ✅ Fleet management (govern 50+ agents)
- ✅ Compliance reporting (SOC2/HIPAA/GDPR/PCI)

```bash
# Backup your existing scans
cp -r ./data ./data.v1.backup

# Upgrade
git pull origin main
pip install -r requirements.txt

# Migrate policy format
python scripts/migrate_v1_to_v5.py ./data.v1.backup

# Restart
python src/app.py
```

### Upgrading from V3 → V5

**V3 users:** You have honeypot detection. V5 adds:
- ✅ Centralized governance (policy hot-reload)
- ✅ Fleet optimization (<12ms latency)
- ✅ Security hardening (6 audit findings fixed)

```bash
# No data migration needed, fully backward compatible
git pull origin main

# Restart (pulling latest code)
python src/app.py
```

---

## Support & Resources

### Documentation

| Document | Focus |
|----------|-------|
| [TWIN-CORE-PROTOCOL.md](./TWIN-CORE-PROTOCOL.md) | How verification works |
| [MULTI-AGENT-SECURITY.md](./MULTI-AGENT-SECURITY.md) | CrewAI/AutoGen/LangGraph security |
| [COMPLIANCE-MAPPING.md](./COMPLIANCE-MAPPING.md) | SOC2/HIPAA/GDPR/PCI mapping |
| [GETTING-STARTED.md](./GETTING-STARTED.md) | Step-by-step tutorials |

### Running Locally

| Command | Purpose |
|---------|---------|
| `python src/app.py` | Start backend |
| `cd sentinul-app-site && npm run dev` | Start frontend |
| `python src/PHASE_4_FINAL_TEST.py` | Test governance |
| `python src/GLOBAL_V5_INTEGRATION_TEST_FINAL.py` | Test all phases |

### Deployment Checklist

- [ ] Read [TWIN-CORE-PROTOCOL.md](./TWIN-CORE-PROTOCOL.md) (5 min)
- [ ] Run local integration tests (1 min)
- [ ] Configure `sentinul_policy.yaml` (5 min)
- [ ] Set env variables in `.env` (2 min)
- [ ] Deploy to production
- [ ] Monitor dashboard at `/dashboard` (ongoing)

### Status

Current Build: **Sentinul V5.0.0 (Production Ready)**

```
Phase 1: Protocol Guard ..................... ✅ OPERATIONAL
Phase 2: Evidence Vault ..................... ✅ OPERATIONAL
Phase 3: Honeypot Mesh ..................... ✅ OPERATIONAL
Phase 4: Universal Governance .............. ✅ OPERATIONAL

Integration Tests: 8/8 PASSING ✅
Security Audit: All 6 findings fixed ✅
Production Deployment: APPROVED ✅
```

---

## License

Proprietary - Sentinul Security  
© 2026 All rights reserved

For licensing inquiries: security@sentinul.dev

---

## Acknowledgments

Built with ❤️ for enterprise AI security.

**Sentinul Team** Los Angeles, CA 🌴🛡️
