---
tags:
publish: false
aliases: 
---
<%tp.file.move("Journal/Daily/" + tp.file.title)%>
# Daily Note:
[[<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>]] <== <button class="date_button">Today</button> ==> [[<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>]]

---
## What's On Your Mind? 
- 

### Goals
- 

#### TBD
- 

## Today Notes:

```dataview
list
from "" and !"Journal/Daily"
where striptime(file.mtime) = date("<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>")
```
---
<%* if (tp.date.now("M-D", 0, tp.file.title, "YYYY-MM-DD") == "1-1") { 
 const year = tp.date.now("YYYY", 0, tp.file.title, "YYYY-MM-DD")
if (!tp.file.exists(year)){
  await tp.file.create_new(tp.file.find_tfile("Yearly"), year , false, this.app.vault.getAbstractFileByPath("Journal/Annually")) }%>
  - Yearly Note Created ==> [[<%year%>]]
<%* } %>
<%* if (tp.date.now("D", 0, tp.file.title, "YYYY-MM-DD") == 1){const month = tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD")
if (!tp.file.exists(month)){
  await tp.file.create_new(tp.file.find_tfile("Monthly"), month , false, this.app.vault.getAbstractFileByPath("Journal/Monthly")) }%>
- Monthly Note Created ==> [[<%month%>]] 
<%* } %>
<%* if (tp.date.now("ddd", 0, tp.file.title, "YYYY-MM-DD") == "Fri") {const week = tp.date.now("gggg-[W]ww", 0, tp.file.title, "YYYY-MM-DD")
if (!tp.file.exists(week)){
  await tp.file.create_new(tp.file.find_tfile("Weekly"), week , false, this.app.vault.getAbstractFileByPath("Journal/Weekly")) }%>
- Weekly Note Created ==> [[<%week%>]]
<%* } %>

## On This Day...
[[<% tp.date.now("YYYY-MM-DD", -365, tp.file.title, "YYYY-MM-DD") %>]]

---
```dataviewjs
dv.taskList(dv.pages('-"Bins/Templates" and #task and -"Bins/Journal"').file.tasks.where(t => !t.completed))
```
