# Monthly Review:
%% This template Requires the Templater plugin %%
[[<% tp.date.now("YYYY-[M]MM", "P-1M") %>]] <== <button class="date_button_today">This Month</button> ==> [[<% tp.date.now("YYYY-[M]MM", "P+1M") %>]]

---

- [[<% tp.date.weekday("YYYY-[W]ww", 0, tp.file.title, "YYYY-[M]MM") %>]]
- [[<% tp.date.weekday("YYYY-[W]ww", 7, tp.file.title, "YYYY-[M]MM") %>]]
- [[<% tp.date.weekday("YYYY-[W]ww", 14, tp.file.title, "YYYY-[M]MM") %>]]
- [[<% tp.date.weekday("YYYY-[W]ww", 21, tp.file.title, "YYYY-[M]MM") %>]]
- [[<% tp.date.weekday("YYYY-[W]ww", 28, tp.file.title, "YYYY-[M]MM") %>]]
