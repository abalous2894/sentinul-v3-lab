# Sentinul: Genesis Sovereignty Edition

Enterprise-grade security verification for autonomous AI agents and multi-agent systems.

Current Version: 5.0.0 Genesis Sovereignty  
Tagline: Beyond Guardrails. Real-Time Sovereignty.  
Status: Production-ready

---

## Table of Contents

- [What's Public vs. Proprietary](#whats-public-vs-proprietary)
- [Quick Start](#quick-start)
- [Installation Options](#installation-options)
- [What's New in Genesis](#whats-new-in-genesis)
- [How to Use the Previous V5 Features](#how-to-use-the-previous-v5-features)
- [How to Use the Genesis Launch Features](#how-to-use-the-genesis-launch-features)
- [BYOK Integration](#byok-integration)
- [Compliance Mappings](#compliance-mappings)
- [Documentation](#documentation)
- [FAQ](#faq)
- [Support](#support)
- [Security](#security)
- [License](#license)

---

## What's Public vs. Proprietary

### Public Governance Protocol

This repository contains public-facing documentation and guidance for the Sentinul governance model, including:

- Governance architecture and protocol guidance
- Compliance mappings and control alignment
- Public integration examples
- MCP integration guidance
- Platform usage documentation for V5 and Genesis workflows

### Proprietary Platform

The full Sentinul platform includes private runtime systems and enterprise delivery components, including:

- Core scanning and remediation engine
- Runtime orchestration and enforcement services
- Live operational dashboards
- Enterprise governance controls
- Managed deployment capabilities

For platform access, visit [sentinul.app](https://sentinul.app).

---

## Quick Start

### Option 1: Review the Governance Protocol

```bash
git clone https://github.com/abalous2894/Sentinul-Governance-Protocol.git
cd Sentinul-Governance-Protocol
```

Recommended starting points:

- `README.md`
- `GETTING-STARTED.md`
- `TWIN-CORE-PROTOCOL.md`
- `MULTI-AGENT-SECURITY.md`
- `COMPLIANCE-MAPPING.md`

### Option 2: Try Sentinul Online

Visit:

```text
https://sentinul.app
```

Typical onboarding flow:

```text
Sign up → Create organization → Connect repository → Run your first scan
```

### Option 3: Use the MCP Integration

Install the MCP server and connect it to your AI development environment.

Claude Desktop example:

```json
{
  "mcpServers": {
    "sentinul": {
      "command": "sentinul-mcp",
      "args": ["--api-key", "YOUR_API_KEY"]
    }
  }
}
```

### Option 4: Use the Platform API

The hosted platform and self-managed environments support secure integration for scanning, reporting, and governance workflows.

---

## Installation Options

### Prerequisites

- Node.js 16+ or Python 3.9+
- Git
- Docker optional

### Option 1: Reference-Only

Use this repository for documentation, governance guidance, and integration examples.

```bash
git clone https://github.com/abalous2894/Sentinul-Governance-Protocol.git
cd Sentinul-Governance-Protocol
```

### Option 2: Full Platform via Sentinul

Use the hosted platform for scanning, reporting, governance workflows, and Genesis features.

Typical setup:

```text
1. Create an account
2. Create an organization
3. Generate an API key
4. Connect a repository
5. Start scanning and governance workflows
```

### Option 3: Docker

You can run Sentinul in a containerized environment for evaluation or isolated deployment.

### Option 4: Local Development

Local development is supported for teams building on top of the governance protocol and integration examples.

---

## What's New in Genesis

Genesis adds four launch pillars on top of the V5 security foundation.

### 1. Neural Mirror

Pre-execution simulation and behavioral prediction for proposed agent actions.

What it enables:

- Simulating proposed behavior before execution
- Estimating operational risk before action is allowed
- Detecting suspicious or obfuscated patterns
- Routing sensitive actions into approval workflows when needed

### 2. Intent Binder

Human approval workflow for high-impact actions.

What it enables:

- Stronger commitment and approval controls for sensitive actions
- Human-in-the-loop authorization for elevated operations
- Approval gating for actions involving sensitive scope or higher risk
- Clear operator accountability for releases of gated actions

### 3. Swarm Immunity

Shared threat intelligence across environments.

What it enables:

- Cross-instance propagation of newly discovered threats
- Faster blocking of repeated malicious patterns
- Stronger resilience for multi-agent and multi-instance deployments
- Shared operational awareness across the fleet

### 4. Recursive Auditor

Self-auditing governance loop.

What it enables:

- Continuous governance health evaluation
- Detection of behavioral drift and policy pressure
- Automated policy hardening recommendations
- Long-term governance maturity tracking

### Genesis Health Snapshot

Genesis provides a unified health view for operators that summarizes:

- Pillar status
- Governance posture
- Swarm readiness
- Overall operational health

---

## How to Use the Previous V5 Features

Genesis extends the V5 platform foundation. The original V5 features remain core to day-to-day usage.

### Phase 1: Protocol Guard

Use Protocol Guard to inspect code, tasks, and tool interactions for security and compliance issues.

Typical use cases:

- Reviewing agent code before deployment
- Identifying risky patterns in tool usage
- Flagging input handling and query construction issues
- Producing risk-scored findings for operators and developers

### Phase 2: Evidence Vault

Use Evidence Vault to maintain tamper-evident records of security-relevant events.

Typical use cases:

- Storing audit trails for security reviews
- Preserving execution and governance evidence
- Supporting internal audit and external compliance reviews
- Maintaining trust in recorded operational history

### Phase 3: Honeypot Mesh

Use Honeypot Mesh to detect adversarial behavior and suspicious interaction patterns.

Typical use cases:

- Detecting prompt-injection attempts
- Identifying privilege-seeking behavior
- Escalating suspicious events for human review
- Strengthening behavioral detection across agent workflows

### Phase 4: Universal Governance

Use Universal Governance to manage policies consistently across a fleet of agents.

Typical use cases:

- Defining global enforcement rules
- Applying governance policies across multiple agents
- Updating policies without major operational disruption
- Monitoring governance posture at the fleet level

### Fleet Management Example

```python
from sentinul import FleetMonitor, PolicyEngine

fleet = FleetMonitor()
policy = PolicyEngine.load_policy("sentinul_policy.yaml")

fleet.register_agent("agent-alpha", skill_id="fp-alpha")
fleet.register_agent("agent-beta", skill_id="fp-beta")
fleet.register_agent("agent-gamma", skill_id="fp-gamma")

health = fleet.get_fleet_health()
print(health.value)
```

### Policy Example

```yaml
global:
  version: "5.0.0"
  default_action: "allow"
  mfa_threshold: 75
  require_identity: true
  audit_all_calls: true

allowed_tool_patterns:
  - "^read_.*$"
  - "^query_.*$"
  - "^analyze_.*$"

blocked_tool_patterns:
  - "^delete_.*$"
  - "^admin_.*$"
  - "^system_.*$"
  - "^override_.*$"
```

### Dashboard Usage

Use the dashboard to monitor:

- Fleet health
- Policy state
- Violations and trends
- Audit integrity
- Governance posture over time

---

## How to Use the Genesis Launch Features

This section explains how to use the Genesis launch features at a workflow level without exposing private implementation details.

### Neural Mirror

Use Neural Mirror before execution when you want to understand whether a proposed action is safe enough to proceed.

Best use cases:

- Evaluating a new agent behavior before rollout
- Testing high-impact operations before enabling them
- Checking whether a workflow should be escalated for human review
- Producing executive-facing summaries of pre-execution risk

Typical operator workflow:

```text
1. Submit a proposed action for simulation
2. Review the resulting safety and risk posture
3. Check whether the action should proceed normally or require approval
4. Record the result as part of the governance trail
```

### Intent Binder

Use Intent Binder when a sensitive or high-impact action requires explicit human approval.

Best use cases:

- Access to sensitive systems or regulated data
- High-value operations with business or compliance impact
- Actions that should not execute without accountable operator approval
- Workflows that need a clear approval chain without losing automation

Typical operator workflow:

```text
1. Register an approved human authorization method
2. Bind a proposed high-impact action into a pending state
3. Present the approval challenge to the operator
4. Approve or reject the action through the authorized device
5. Verify status before release
```

### Swarm Immunity

Use Swarm Immunity when you want one discovered threat to strengthen protection across the rest of the fleet.

Best use cases:

- Multi-agent systems
- Distributed runtime environments
- Shared threat intelligence operations
- Blocking repeated malicious patterns across environments

Typical operator workflow:

```text
1. Register a newly observed threat pattern
2. Distribute the intelligence across participating environments
3. Validate proposed skills or behaviors against known threat indicators
4. Block or quarantine matching activity where needed
```

### Recursive Auditor

Use Recursive Auditor when you want the governance layer itself to keep learning from observed pressure, drift, and threat patterns.

Best use cases:

- Ongoing governance review
- Policy-hardening programs
- Leadership reporting on governance maturity
- Detecting early signs of operational drift

Typical operator workflow:

```text
1. Run a governance self-audit cycle
2. Review recommendations and drift indicators
3. Approve or adopt policy hardening updates
4. Track health and governance maturity over time
```

---

## BYOK Integration

Genesis includes customer-managed key support for organizations that require key sovereignty.

### What BYOK is for

Use BYOK when:

- your organization requires customer-managed encryption controls
- compliance requires stronger control over key ownership
- sensitive actions must be cryptographically sealed under your governance

### Supported deployment model

BYOK is available for sovereignty-oriented deployments that want to align platform operations with customer-controlled key management practices.

### Operational model

The high-level model is:

```text
1. Your organization manages the key material
2. Sentinul uses that key authority to seal sensitive operations
3. Verification happens within your approved trust boundary
4. Governance and audit workflows retain evidence without exposing key material
```

### Health and readiness

BYOK status is surfaced through standard platform health and governance views so operators can verify readiness as part of normal operations.

---

## Compliance Mappings

| Standard | Coverage Focus | Relevant Sentinul Features |
|----------|----------------|----------------------------|
| **SOC2 Type II** | Auditability and control evidence | Evidence Vault, Universal Governance, BYOK |
| **HIPAA** | Access control and protected data handling | Protocol Guard, Intent Binder, BYOK |
| **GDPR** | Data protection and governance controls | Protocol Guard, Evidence Vault, Recursive Auditor |
| **ISO 27001** | Governance and control operations | Universal Governance, Swarm Immunity, Recursive Auditor |
| **PCI-DSS** | Sensitive data and access control | Protocol Guard, Intent Binder, Evidence Vault |

---

## Documentation

Start with:

- `GETTING-STARTED.md`
- `TWIN-CORE-PROTOCOL.md`
- `MULTI-AGENT-SECURITY.md`
- `COMPLIANCE-MAPPING.md`

Recommended reading order:

1. `GETTING-STARTED.md`
2. `TWIN-CORE-PROTOCOL.md`
3. `MULTI-AGENT-SECURITY.md`
4. `COMPLIANCE-MAPPING.md`
5. This README’s Genesis usage section

---

## FAQ

**Q: Does this README include Aegis or Genesis 1.1?**  
No. This README is intentionally limited to the V5 foundation and the Genesis launch.

**Q: Can I still use the older V5 features?**  
Yes. Protocol Guard, Evidence Vault, Honeypot Mesh, and Universal Governance remain part of the platform and are still covered here.

**Q: Does Genesis replace V5?**  
No. Genesis extends the V5 foundation rather than replacing it.

**Q: Is BYOK required?**  
No. It is optional and primarily relevant for organizations with strong key sovereignty requirements.

**Q: Is the full scanning engine open source?**  
No. The governance protocol and public guidance are open, but the full runtime platform remains proprietary.

---

## Support

- GitHub Issues for documentation questions and protocol feedback
- Platform access via [sentinul.app](https://sentinul.app)
- Support: `contact@sentinul.app`
- Security reports: `contact@sentinul.app` with `[SECURITY]` in the subject line

---

## Security

- Governance-first architecture
- Tamper-evident audit design
- Human approval controls for sensitive actions
- Shared threat intelligence for distributed defense
- Support for customer-managed cryptographic control models

---

## License

- Documentation and specifications: see repository license
- Code samples and examples: see repository license
- Platform runtime: proprietary

---

Built for enterprise security teams operating autonomous systems at scale.

---

**Built with 🛡️ for enterprise security teams operating autonomous systems at scale.**

**Sentinul Team | 🌴 Made in Los Angeles, California | March 2026**
