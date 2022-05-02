---
tags:
publish: false
aliases:
---
<%tp.file.move("Journal/Annually/" + tp.file.title)%>
# Yearly Note:
[[<% tp.date.now("YYYY", "P-1Y", tp.file.title, "YYYY") %>]] <== <button class="date_button">This Year</button> ==> [[<% tp.date.now("YYYY","P1Y" , tp.file.title, "YYYY") %>]]

---
## What's on Your Mind?
- 

### Goals:
- 

#### TBD:
- 

## Monthly Notes:
<%* for (let i = 0; i < 12; i++) { %>
 [[<%tp.date.now("YYYY-MM", "P+" + i + "M", tp.file.title, "YYYY")%>]]
<%*	} %>
## Reflection:
