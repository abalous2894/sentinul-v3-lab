# Sentinul V5 Governance Protocol

**Cryptographic Compliance at Scale** — Open-source governance specs, compliance mappings, and reference implementations for enterprise security auditing.

> 🔒 **The Sentinul Engine** (core scanner, remediation, Evidence Vault) **is proprietary & closed-source**. This repository contains the **public Governance Protocol**, enabling interoperability and transparency in security compliance.

---

## 📋 Table of Contents

- [What's Public vs. Proprietary](#whats-public-vs-proprietary)
- [Quick Start](#quick-start)
- [Installation Options](#installation-options)
- [Protocol Specification](#protocol-specification)
- [Compliance Mappings](#compliance-mappings)
- [MCP Plugin (Open Source)](#mcp-plugin-open-source)
- [Contributing](#contributing)
- [Support](#support)

---

## 🎯 What's Public vs. Proprietary

### ✅ This Repository (PUBLIC - Sentinul-Governance-Protocol)

- **Governance Protocol Specification** — Full V5 four-phase architecture
- **Compliance Mappings** — SOC2, HIPAA, GDPR, ISO 27001 alignment
- **API Reference Implementations** — Example integrations in Python/Node.js
- **Open-Source MCP Plugins** — Model Context Protocol server implementations
- **Documentation & Guides** — Security architecture, threat models, best practices

### 🔒 Private Enterprise Repository (PROPRIETARY)

- **Sentinul Scanning Engine** — Twin-Core Unicode/SQL injection detection
- **Evidence Vault Implementation** — SHA-256 hash-chaining ledger system
- **Honeypot Mesh & Behavioral Analysis** — 15+ shadow skill detection
- **Web Dashboard & UI** — Real-time vulnerability visualization
- **Automatic Code Remediation** — AI-powered fix generation with GitHub PR integration
- **Enterprise Features** — BYOK, MFA, audit trail signing, compliance reporting

👉 **For Full Platform Access:** Visit [sentinul.app](https://sentinul.app) or contact `Sentinul.ext@gmail.com`

---

## 🚀 Quick Start

### Option 1: Review Protocol Documentation (5 minutes)

```bash
# Clone this repository
git clone https://github.com/abalous2894/Sentinul-Governance-Protocol.git
cd Sentinul-Governance-Protocol

# Read the core governance spec
cat docs/GOVERNANCE_SPEC.md

# Review compliance mappings
cat docs/COMPLIANCE_MAPPINGS.md

# View API reference
cat docs/API_REFERENCE.md
```

### Option 2: Try Sentinul Online (2 minutes)

```
https://sentinul.app
↓
Sign up → Create organization → Scan your first repository
```

### Option 3: Self-Hosted with MCP Plugin (15 minutes)

```bash
# Clone the governance protocol repo
git clone https://github.com/abalous2894/Sentinul-Governance-Protocol.git
cd Sentinul-Governance-Protocol/mcp-plugin

# Install dependencies
npm install

# Configure MCP server
cp .env.example .env
# Edit .env with your Sentinul API credentials

# Start MCP server
npm start

# Usage in Claude, Cursor, or other AI tools
# See: README in mcp-plugin/ directory
```

---

## 📦 Installation Options

### Prerequisites (All Options)

- Node.js 16+ or Python 3.9+
- Git
- (Optional) Docker for isolated testing

---

### Option 1: Protocol Reference Only ⭐ RECOMMENDED FOR READING

**What you'll get:** Access to specs, mappings, and examples. No scanning capability.

```bash
# Clone the governance protocol
git clone https://github.com/abalous2894/Sentinul-Governance-Protocol.git
cd Sentinul-Governance-Protocol

# Explore structure
ls -la
# ├── docs/                    # Protocol specs & compliance mappings
# ├── mcp-plugin/              # Open-source MCP server
# ├── examples/                # Reference implementations (Python/Node.js)
# └── README.md

# View documentation
cd docs
ls -la GOVERNANCE_SPEC.md COMPLIANCE_MAPPINGS.md API_REFERENCE.md

# Study reference implementations
cd ../examples
# Python example: twin_core_reference.py
# Node.js example: vault_reference.js
cat twin_core_reference.py
```

---

### Option 2: Build & Run MCP Plugin Locally

**What you'll get:** MCP server for Claude, Cursor, and other AI tools that support Model Context Protocol.

```bash
# Clone repo
git clone https://github.com/abalous2894/Sentinul-Governance-Protocol.git
cd Sentinul-Governance-Protocol/mcp-plugin

# Install dependencies
npm install

# Create configuration
cp .env.example .env
nano .env  # Add your API credentials

# Build TypeScript
npm run build

# Start MCP server
npm start

# Server runs on: stdio (for Claude, Cursor, etc.)
# Or HTTP: localhost:3000 (for custom integrations)
```

**Configure in Claude Desktop:**
```json
{
  "mcpServers": {
    "sentinul-governance": {
      "command": "node",
      "args": ["path/to/mcp-plugin/dist/index.js"]
    }
  }
}
```

---

### Option 3: Enterprise Backend (Full Platform) 🏢

**What you'll get:** Complete scanning engine, remediation, Evidence Vault, UI dashboard.

```bash
# This is hosted at: https://sentinul.app
# Or self-hosted on your infrastructure

# To deploy:
# 1. Sign up at https://sentinul.app
# 2. Create organization
# 3. Generate API token
# 4. Connect your repositories
# 5. Run scans

# CLI Usage:
sentinul scan ./src --standards soc2,hipaa
sentinul fix --all
sentinul report --generate-pdf
```

**For Self-Hosted Enterprise:**
```bash
# Contact: Sentinul.ext@gmail.com
# We coordinate private deployment with:
# - Backend infrastructure setup
# - Database configuration
# - CI/CD integration
# - Support & SLAs
```

---

### Option 4: Docker (Isolated Testing)

```bash
# Clone repo
git clone https://github.com/abalous2894/Sentinul-Governance-Protocol.git
cd Sentinul-Governance-Protocol

# Build container
docker build -t sentinul-governance:5.0 .

# Run MCP plugin in container
docker run -d \
  --name sentinul-mcp \
  -p 3000:3000 \
  -e SENTINUL_API_KEY=your_api_key \
  sentinul-governance:5.0

# Health check
curl http://localhost:3000/health

# Logs
docker logs -f sentinul-mcp
```

---

## 📖 Protocol Specification

### V5 Four-Phase Governance Architecture

#### Phase 1: Protocol Guard (Twin-Core)
- **Unicode Normalization** - NFKD canonicalization + attack pattern detection
- **SQL Injection Detection** - Query parsing + parameterization analysis
- **Performance** - <0.04ms per scan
- See: [docs/PHASE_1_PROTOCOL_GUARD.md](docs/PHASE_1_PROTOCOL_GUARD.md)

#### Phase 2: Evidence Vault (Hash-Chained Audit Ledger)
- **SHA-256 Cryptographic Linking** - Immutable event chaining
- **Append-Only Storage** - UNIQUE constraints prevent tampering
- **Compliance Ready** - SOC2, HIPAA, GDPR audit trail
- See: [docs/PHASE_2_EVIDENCE_VAULT.md](docs/PHASE_2_EVIDENCE_VAULT.md)

#### Phase 3: Honeypot Mesh (Behavioral Analysis)
- **15+ Shadow Skills** - Deception-based threat detection
- **Behavioral Reasoning** - Agent goal extraction & analysis
- **MFA Escalation** - Triggered for suspicious patterns
- See: [docs/PHASE_3_HONEYPOT_MESH.md](docs/PHASE_3_HONEYPOT_MESH.md)

#### Phase 4: Universal Governance (Policy Enforcement)
- **BYOK (Bring Your Own Key)** - Customer-managed encryption
- **Policy Hot-Reload** - Real-time compliance updates
- **Automated Remediation** - GitHub PR creation with verified fixes
- See: [docs/PHASE_4_UNIVERSAL_GOVERNANCE.md](docs/PHASE_4_UNIVERSAL_GOVERNANCE.md)

---

## 📊 Compliance Mappings

### Supported Standards

| Standard | Coverage | Automation | See Documentation |
|----------|----------|------------|-------------------|
| **SOC2 Type II** | 100% | ✅ Audit Trail | [compliance/SOC2.md](docs/compliance/SOC2.md) |
| **HIPAA** | 95% | ✅ Encryption + Access Logs | [compliance/HIPAA.md](docs/compliance/HIPAA.md) |
| **GDPR** | 90% | ✅ Data Residency + DPO Alerts | [compliance/GDPR.md](docs/compliance/GDPR.md) |
| **ISO 27001** | 88% | ⏳ Manual Review | [compliance/ISO27001.md](docs/compliance/ISO27001.md) |
| **PCI-DSS** | 85% | ✅ Credential Detection | [compliance/PCI-DSS.md](docs/compliance/PCI-DSS.md) |

---

## 🔌 MCP Plugin (Open Source)

The **Model Context Protocol** plugin brings Sentinul governance into AI development environments.

### Supported Capabilities

```
✅ auditor_scan           → Analyze code for security & compliance
✅ auditor_fix             → AI-powered vulnerability remediation
✅ auditor_report          → Generate signed PDF compliance reports
✅ auditor_secret_detect   → Identify hardcoded credentials
✅ auditor_entropy_check   → Detect high-entropy suspicious strings
```

### Usage in Claude

```
@sentinul scan ./src --standards soc2,hipaa
```

### Usage in Cursor

```
// MCP integration enabled automatically
// Use keyboard shortcut: Cmd+K to access Sentinul commands
```

### Documentation

See: [mcp-plugin/README.md](mcp-plugin/README.md)

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| [GOVERNANCE_SPEC.md](docs/GOVERNANCE_SPEC.md) | Complete V5 protocol specification |
| [COMPLIANCE_MAPPINGS.md](docs/COMPLIANCE_MAPPINGS.md) | SOC2/HIPAA/GDPR/ISO mapping |
| [API_REFERENCE.md](docs/API_REFERENCE.md) | REST & gRPC API documentation |
| [THREAT_MODEL.md](docs/THREAT_MODEL.md) | Security threat analysis & mitigations |
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | System design & component interactions |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Developer contribution guidelines |

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for:

- Code style guidelines
- Testing requirements
- Pull request process
- License (Apache 2.0)

### Contributors

- **Protocol Design** - Sentinul Security Team
- **Community Contributions** - See [CONTRIBUTORS.md](CONTRIBUTORS.md)

---

## ❓ FAQ

**Q: Can I use Sentinul to scan my repositories?**
> Yes! Visit [sentinul.app](https://sentinul.app) to sign up for the full platform. This repository contains the open-source governance protocol only.

**Q: Is the core scanning engine open source?**
> No. The Twin-Core scanner, Evidence Vault, and remediation engine are proprietary for security and compliance reasons. The governance protocol itself (this repo) is open source for transparency.

**Q: Can I deploy Sentinul on my own servers?**
> Yes, for enterprise customers. Contact `Sentinul.ext@gmail.com` for self-hosted deployment options.

**Q: What's the difference between this repo and the full platform?**
> **This Repo (Sentinul-Governance-Protocol):**
> - Protocol specs & architecture
> - Compliance mappings (SOC2/HIPAA/etc.)
> - Open-source MCP plugin
> - Reference implementations
> 
> **Full Platform (sentinul.app):**
> - Web dashboard & UI
> - Automated vulnerability scanning
> - AI-powered code remediation
> - GitHub/GitLab integration
> - Evidence Vault with compliance reporting
> - Enterprise features (BYOK, MFA, etc.)

**Q: How do I report security vulnerabilities?**
> Email: [security@sentinul.app](mailto:security@sentinul.app)  
> We take all security reports seriously and coordinate responsible disclosure.

---

## 📞 Support

| Channel | Purpose |
|---------|---------|
| **GitHub Issues** | Protocol bugs, feature requests |
| **Email** | [support@sentinul.app](mailto:support@sentinul.app) |
| **Security Reports** | [security@sentinul.app](mailto:security@sentinul.app) |
| **Discord** | [Community Chat](#) (coming soon) |
| **Docs** | [https://docs.sentinul.dev](https://docs.sentinul.dev) |

---

## 📄 License

- **Protocol Documentation & Specs** - CC BY 4.0 (Attribution)
- **MCP Plugin Code** - Apache 2.0
- **Examples & Reference Implementations** - Apache 2.0

See [LICENSE](LICENSE) for details.

---

## 🚀 What's Next?

1. ⭐ **Star this repo** if you find Sentinul Governance Protocol useful
2. 📖 **Read the specifications** in [docs/GOVERNANCE_SPEC.md](docs/GOVERNANCE_SPEC.md)
3. 🔌 **Try the MCP plugin** - integrate into Claude or Cursor
4. 🏢 **Deploy Sentinul Enterprise** - visit [sentinul.app](https://sentinul.app)
5. 💬 **Contribute** - submit PRs or report issues

---

## 🛡️ Security

- **Cryptographic Verification** - All specs reviewed by security specialists
- **No Backdoors** - Protocol is fully transparent & auditable
- **Vulnerability Disclosure** - See [SECURITY.md](SECURITY.md)

---

**Built with 🛡️ for Enterprise Security — Sentinul Team, March 2026**

