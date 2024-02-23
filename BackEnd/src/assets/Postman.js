{
	"info": {
		"_postman_id": "37ccc0e6-ad00-4180-9149-ed753b2072cb",
		"name": "tresPiMedios",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "23844351"
	},
	"item": [
		{
			"name": "initialBD",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3001/",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "addSale",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "[\r\n  {\r\n    \"name\" : \"Arroz\",\r\n    \"price\": 2000,\r\n    \"qty\" : 5,\r\n    \"user_name\" : \"Employee\"\r\n  },\r\n  {\r\n    \"name\" : \"Arroz\",\r\n    \"price\": 2000,\r\n    \"qty\" : 5,\r\n    \"user_name\" : \"Employee\"\r\n  },\r\n  {\r\n    \"name\" : \"Arroz\",\r\n    \"price\": 2000,\r\n    \"qty\" : 5,\r\n    \"user_name\" : \"Employee\"\r\n  },\r\n  {\r\n    \"name\" : \"Arroz\",\r\n    \"price\": 2000,\r\n    \"qty\" : 5,\r\n    \"user_name\" : \"Employee\"\r\n  },\r\n  {\r\n    \"name\" : \"Arroz\",\r\n    \"price\": 2000,\r\n    \"qty\" : 5,\r\n    \"user_name\" : \"Employee\"\r\n  }  \r\n]",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3001/addSale",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"addSale"
					]
				}
			},
			"response": []
		},
		{
			"name": "updateSale",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "\r\n  {\r\n    \"name\" : \"Leche\",\r\n    \"price\": 3000,\r\n    \"qty\" : 2,\r\n    \"user_name\" : \"Manager\"\r\n  }",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3001/sale/59954ac1-ceb4-45c4-8d01-ec183fab3784",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"sale",
						"59954ac1-ceb4-45c4-8d01-ec183fab3784"
					]
				}
			},
			"response": []
		},
		{
			"name": "deleteSale",
			"request": {
				"method": "DELETE",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "\r\n  {\r\n    \"name\" : \"Harina\",\r\n    \"price\": 5000,\r\n    \"qty\" : 1,\r\n    \"user_name\" : \"Employee\"\r\n  }",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3001/sale/40a76378-105f-40a2-993c-8f7a30716861",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"sale",
						"40a76378-105f-40a2-993c-8f7a30716861"
					]
				}
			},
			"response": []
		},
		{
			"name": "listSale",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "[\r\n  {\r\n    \"name\" : \"Arroz\",\r\n    \"price\": 2000,\r\n    \"qty\" : 5,\r\n    \"user_name\" : \"Employee\"\r\n  },\r\n  {\r\n    \"name\" : \"Arroz\",\r\n    \"price\": 2000,\r\n    \"qty\" : 5,\r\n    \"user_name\" : \"Employee\"\r\n  },\r\n  {\r\n    \"name\" : \"Arroz\",\r\n    \"price\": 2000,\r\n    \"qty\" : 5,\r\n    \"user_name\" : \"Employee\"\r\n  },\r\n  {\r\n    \"name\" : \"Arroz\",\r\n    \"price\": 2000,\r\n    \"qty\" : 5,\r\n    \"user_name\" : \"Employee\"\r\n  },\r\n  {\r\n    \"name\" : \"Arroz\",\r\n    \"price\": 2000,\r\n    \"qty\" : 5,\r\n    \"user_name\" : \"Employee\"\r\n  }  \r\n]",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3001/sale",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"sale"
					]
				}
			},
			"response": []
		},
		{
			"name": "searchSale",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "\r\n  {\r\n    \"name\" : \"Harina\",\r\n    \"price\": 5000,\r\n    \"qty\" : 1,\r\n    \"user_name\" : \"Employee\"\r\n  }",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3001/sale/55f4db41-d938-45bc-885e-10b43939d0dc",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"sale",
						"55f4db41-d938-45bc-885e-10b43939d0dc"
					]
				}
			},
			"response": []
		},
		{
			"name": "Products",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "POST",
				"header": [
					{
						"key": "Auth",
						"value": "c7fadd54-26c2-4e59-b9bd-5221359966ae",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "[\r\n  {\r\n    \"id\" : \"479fba0a-baaf-4b46-95a2-83a663817646\",\r\n    \"name\" : \"Arroz\",\r\n    \"description\" : \"Libra\",\r\n    \"price\" : 3000\r\n  },\r\n  {\r\n    \"id\" : \"efbff7f6-6374-4c2f-9c96-3611c65068ba\",\r\n    \"name\" : \"Papas\",\r\n    \"description\" : \"Libra\",\r\n    \"price\" : 1000\r\n  },\r\n  {\r\n    \"id\" : \"f7c377cf-0f92-435a-b5e6-2c8cdd9d10c6\",\r\n    \"name\" : \"Agua sin gas\",\r\n    \"description\" : \"500 ml\",\r\n    \"price\" : 2000\r\n  },\r\n  {\r\n    \"id\" : \"3bed5d90-64ed-4bc1-8a3a-a378737ed542\",\r\n    \"name\" : \"Agua con gas\",\r\n    \"description\" : \"500 ml\",\r\n    \"price\" : 2500\r\n  },\r\n  {\r\n    \"id\" : \"c3f25f98-c5c3-4a00-b550-f716ae36b25f\",\r\n    \"name\" : \"Docena de huevos\",\r\n    \"description\" : \"ministro de haciendo aprueba\",\r\n    \"price\" : 1800\r\n  }  \r\n]\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3001/addProducts",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"addProducts"
					]
				}
			},
			"response": []
		},
		{
			"name": "Products",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "addUser",
			"request": {
				"method": "POST",
				"header": []
			},
			"response": []
		},
		{
			"name": "listUsuer",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3001/user",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"user"
					]
				}
			},
			"response": []
		},
		{
			"name": "deleteUSer",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:3001/user/479fba0a-baaf-4b46-95a2-83a663817646",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"user",
						"479fba0a-baaf-4b46-95a2-83a663817646"
					]
				}
			},
			"response": []
		},
		{
			"name": "searchUsuer",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "updateUser",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3001/user/479fba0a-baaf-4b46-95a2-83a663817646",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"user",
						"479fba0a-baaf-4b46-95a2-83a663817646"
					]
				}
			},
			"response": []
		},
		{
			"name": "addRole",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "[\r\n    {\r\n        \"name\":\"Manager\"\r\n    }\r\n]",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3001/addRole",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"addRole"
					]
				}
			},
			"response": []
		},
		{
			"name": "updateRole",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "[\r\n    {\r\n        \"name\":\"Manager\"\r\n    }\r\n]",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3001/updateRole/b40fec32-952c-4734-a0d5-392e13e18140",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"updateRole",
						"b40fec32-952c-4734-a0d5-392e13e18140"
					]
				}
			},
			"response": []
		},
		{
			"name": "dailyClosure",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3001/dailyClosure/2023-02-22",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"dailyClosure",
						"2023-02-22"
					]
				}
			},
			"response": []
		},
		{
			"name": "dailyMonth",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3001/monthSales/2023/02?Auth=0975faeb-b2a8-4ccb-9b68-6de5f7bafe44",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3001",
					"path": [
						"monthSales",
						"2023",
						"02"
					],
					"query": [
						{
							"key": "Auth",
							"value": "0975faeb-b2a8-4ccb-9b68-6de5f7bafe44"
						}
					]
				}
			},
			"response": []
		}
	]
}