<%* 
	const year = await tp.system.prompt("This year : YYYY") 
  tp.file.create_new(tp.file.find_tfile("Yearly"), year, true, this.app.vault.getAbstractFileByPath("Journal/Annually"))
%>