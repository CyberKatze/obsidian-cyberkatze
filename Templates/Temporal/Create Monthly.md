<%* 
	const month = await tp.system.prompt("Monthly note: YYYY-MM") 
  tp.file.create_new(tp.file.find_tfile("Monthly"), month, true, this.app.vault.getAbstractFileByPath("Journal/Monthly"))
%>