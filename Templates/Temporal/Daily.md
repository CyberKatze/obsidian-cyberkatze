---
tags:
publish: false
aliases: 
---

## On This Day...

[[<%tp.date.now("YYYY-MM-DD", -365)%>]]

---

## Notes Created Today

```dataview
list
from "" and !"Journal/Daily"
where striptime(file.ctime) =date("<%tp.date.now("YYYY-MM-DD")%>")
```
---

[[<% tp.date.yesterday("YYYY-MM-DD") %>]] <== <button class="date_button_today">Today</button> ==> [[<% tp.date.tomorrow("YYYY-MM-DD") %>]]

#### Whats On Your Mind? 

##### Goals

###### TBD

---

<%* if (tp.date.now("M-D") == "1-1") { %>
- [ ] Make Yearly Note
<%* } _%>
<%* if (tp.date.now("D") == 1) { %>
- [ ] Make Monthly Note
<%* } _%>
<%* if (tp.date.now("ddd") == "Fri") { %>
- [ ] Make Weekly Note
<%* } _%>

```dataviewjs
dv.taskList(dv.pages('-"Bins/Templates" and #task and -"Bins/Journal"').file.tasks.where(t => !t.completed))
```
