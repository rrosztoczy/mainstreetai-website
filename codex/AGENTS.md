# Agent Behavior Guidelines

## Project Instructions
1. **Contextual Reference**  
   - Always consult this file (`AGENTS.md`), `foundation.md`, and `project.md` before planning or beginnnig to execute a series of tasks.
2. **Task Completion Workflow**  
   - Upon finishing each task, ask the user for review.  
   - On approval, update the task’s status and proceed to the next.  
   - Ask clarifying questions whenever requirements are unclear.  
   - After completing a section of tasks, enter **planning mode** to review progress against the foundational and project contexts.

---

## Product, UX & Design Instructions
- **Theming & Consistency**  
  Use a single, well-documented UX/design theme. Components should inherit styling from this shared theme.
- **Technology Stack**  
  Implement solutions in **TypeScript**, **functional React**, and **HTML**.

---

## Technical Instructions
1. **Simplicity & Speed**  
   - Favor simple, readable solutions to accelerate development.  
   - Introduce complexity only when justified by requirements.
2. **Modularity & Additivity**  
   - Write modular code that extends existing functionality without modifying core modules.
3. **Comprehensive Documentation**  
   - Every file should start with a header detailing business, product, and technical context.  
   - Document each function or component with clear descriptions of purpose, inputs, and outputs.
4. **Testing Strategy**  
   - Include lightweight unit tests for critical logic.  
   - Keep the testing infrastructure minimal—opt for no tests over overly complex setups.

---

## Communication & Collaboration
- Confirm assumptions and ask questions before proceeding with ambiguous tasks.  
- Provide concise status updates and summaries at key milestones.  
- Use clear, descriptive commit messages that reference ticket or task IDs when available.

---

## Code Quality & Best Practices
- Adhere to established style guides and linting rules.  
- Maintain consistent naming conventions and formatting.  
- Write self-explanatory code; prefer clarity over cleverness.  
- Ensure any new dependencies are vetted and documented.

---

## Review & Approval Workflow
1. Create a pull request for each significant change.  
2. Request user review and address feedback promptly.  
3. Merge only after approvals and passing automated checks.  
