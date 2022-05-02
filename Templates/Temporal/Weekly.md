---
tags:
publish: false
aliases:
---
<%tp.file.move("Journal/Weekly/" + tp.file.title)%>
# Weekly Note:
[[<%tp.date.now("gggg-[W]ww", -1, tp.file.title, "gggg-[W]ww")%>]] <== <button class="date_button">This Week</button>==> [[<%tp.date.now("gggg-[W]ww", 7, tp.file.title, "gggg-[W]ww")%>]]

---
## What's on Your Mind?
- 

### Goals:
- 

#### TBD:
- 

---
## Notes:

```dataview
list
from "" and !"Journal"
where date("<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "gggg-[W]ww") %>") <= file.mtime AND file.mtime <= date("<% tp.date.now("YYYY-MM-DD", 6, tp.file.title, "gggg-[W]ww") %>")
```


## Daily Notes:
- [[<%tp.date.now("gggg-MM-DD", 0, tp.file.title, "gggg-[W]ww")%>]] 
- [[<%tp.date.now("gggg-MM-DD", 1, tp.file.title, "gggg-[W]ww")%>]] 
- [[<%tp.date.now("gggg-MM-DD", 2, tp.file.title, "gggg-[W]ww")%>]] 
- [[<%tp.date.now("gggg-MM-DD", 3, tp.file.title, "gggg-[W]ww")%>]] 
- [[<%tp.date.now("gggg-MM-DD", 4, tp.file.title, "gggg-[W]ww")%>]] 
- [[<%tp.date.now("gggg-MM-DD", 5, tp.file.title, "gggg-[W]ww")%>]] 
- [[<%tp.date.now("gggg-MM-DD", 6, tp.file.title, "gggg-[W]ww")%>]] 

## Reflection:
