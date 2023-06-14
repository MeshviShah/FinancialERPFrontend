const defaultParams = {
  search: "", //--> search box
  // sortField: "createdAt", //--> sort column name
  // order: "DESC", // ||ASC //--> order by
  // filterField: "", //--> filter column
  // filterValue: "", //--> filter value
  // page: "", //--> page number
  // limit: "", //--> record limit per page
};

export function queryBuilder(data)  {
  console.log(data.search, "search");
  
  const query = {};
  data.search !== undefined
    ? (query.search = data.search)
    : (query.search = defaultParams.search)
    
  // data.order !== ""
  //   ? (query.order = data.order)
  //   : (query.order = defaultParams.order);
  // data.filterField !== ""
  //   ? (query.filterField = data.filterField)
  //   : (query.filterField = defaultParams.filterField);
  // data.filterValue !== ""
  //   ? (query.filterValue = data.filterValue)
  //   : (query.filterValue = defaultParams.filterValue);
  // data.page !== ""
  //   ? (query.offset = (data.page - 1) * parseInt(data.limit))
  //   : (query.offset = "");
  // data.limit !== "" ? (query.limit = parseInt(data.limit)) : (query.page = "");
  return query;
};
