const data = {
  "currentCat":"ALL",
	"todos":{
		"byId":{
			"1":{
              "copy":"Enter Timesheet",
              "completed":"false",
              "cat":"id1"
          	},
          	"2":{
              "copy":"Take Coffee Break",
              "completed":"false",
              "cat":"id1"
          	},
          	"3":{
              "copy":"Do Laundry",
              "completed":"false",
              "cat":"id2"
          	},
          	"4":{
              "copy":"Wash Dishes",
              "completed":"false",
              "cat":"id2"
          	}

		},
		"allIds":["1", "2", "3", "4"]
	},
	"categories":{
		"byId":{
			"id1":{
				"title":"Work Todos"
			},
			"id2":{
				"title":"Home todos"
			}
		},
		"allIds":["id1", "id2"]
	}
}

export default data;