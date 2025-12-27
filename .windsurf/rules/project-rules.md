---
trigger: manual
---

# Universal AI Coding Assistant Rules 

Important Rule: Always remember, before editing the codebase, always provide your solution first in the chat or tell me beforehand before any edits in the entire codebase of the project

Then remember these following:
## Core Philosophy
- Simplicity > Cleverness
- Working > Perfect  
- Concrete > Abstract (until abstraction proves necessary)
- Readable > Optimal
- Ship fast, refactor when pain is felt

## Code Quality Standards
- Functions under 50 lines
- Max 3 levels of nesting (prevents spaghetti code)
- One responsibility per function/class
- Clear naming (no clever abbreviations or generic names)
- Comments explain "why", not "what"

## Solution Strategy
1. Deliver simplest working solution first
2. Let problems reveal themselves
3. Apply patterns when they solve real, current problems
4. Ask before adding complexity

## Reuse & Abstraction (Rule of Three)
1st occurrence → Write inline
2nd occurrence → Duplication acceptable (note: "extract if reused again")
3rd+ occurrence → Extract to reusable function

Immediate extraction only for:
- Obviously reusable (date formatting, validation)
- Security/auth logic
- External API wrappers
- Configuration

Bad abstraction signs:
- Generic names (utils, helpers)
- Used once
- More complex than duplication
- "Just in case" code

## Pattern Usage
- Use patterns naturally where beneficial
- Don't announce pattern names unless asked
- Prefer composition over inheritance
- Wait for pattern to emerge from real code

## Anti-Spaghetti Code Rules
- Break up functions over 50 lines
- Refactor nesting deeper than 3 levels
- Extract conditions into named functions
- One level of abstraction per function
- Early returns over nested if/else

## Complexity Triggers (ask before adding)
- State management libraries
- Custom abstraction layers
- Performance optimizations before measuring
- Enterprise patterns
- Microservices/distributed systems

## Context Adaptation
"MVP" / "prototype" / "learning" → Minimal, inline code
"production" → Add error handling, extract reused logic
"team" / "enterprise" → More structure, documentation

## Explanation Style
- Assume smart but not deeply technical
- Only comment what is necessary, not the obvious ones
- Show trade-offs
- Offer simple solution first, mention advanced exists
- Call out if something seems unnecessarily complex

## When Uncertain
Ask: "What's the context: MVP, production, learning, or team project?"
Ask: "Is this a one-off or will similar code appear elsewhere?"