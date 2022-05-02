---
tags:
publish: false
aliases:
---
<%tp.file.move("Journal/Monthly/" + tp.file.title)%>
# Monthly Note:
[[<% tp.date.now("YYYY-MM", "P-1M", tp.file.title, "YYYY-MM") %>]] <== <button class="date_button">This Month</button> ==> [[<% tp.date.now("YYYY-MM", "P1M", tp.file.title, "YYYY-MM") %>]]

## What's on Your Mind?
- 

### Goals:
- 
#### TBD:
- 

---
## Weekly Notes:
- [[<% tp.date.weekday("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM") %>]]
- [[<% tp.date.weekday("YYYY-[W]ww", 7, tp.file.title, "YYYY-MM") %>]]
- [[<% tp.date.weekday("YYYY-[W]ww", 14, tp.file.title, "YYYY-MM") %>]]
- [[<% tp.date.weekday("YYYY-[W]ww", 21, tp.file.title, "YYYY-MM") %>]]
- [[<% tp.date.weekday("YYYY-[W]ww", 28, tp.file.title, "YYYY-MM") %>]]

## Reflection: