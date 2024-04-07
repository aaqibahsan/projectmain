function getPageData() {
  return {
      mainHeader: '',
      mainImg: '',
      subcontent: [],
      async init() {
          // Fetch JSON data
          const response = await fetch('page_one.json');
          const data = await response.json();
          
          // Assign data to variables
          this.mainHeader = data.mainHeader;
          this.mainImg = data.mainImg;
          this.subcontent = data.subcontent;
      }
  };
}
getPageData().init();
