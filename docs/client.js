

const client = {
    paths: {

        "/products/list": {
            get: {
                tags: ["Products"],
                summary: "Lista de Produtos",
                operationId: "productList",
                description: " Listar todos produto",
                parameters: [
                    // expected parameters
                    // {
                    //     name: "id", // name of param
                    //     in: "Query", // location of param
                    //     schema: {
                    //          $ref: "#/components/schemas/id", // id model
                    //      },
                    //     required: false, // mandatory
                    //     //description: "Deleting a done todo", // param desc
                    // },
                ],
                responses: {
                    200: {
                        description: "",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    example:{
                                       "id": "1",
                                        "name": "Teste",
                                        "value": 15
                                    } 
                                   // $ref: "#/components/schemas/Products", 
                                }
                                
                            }

                        }

                    }
                },
            }
        },
        "/clients/list": {
            get: {
                tags: ["Clients"],
                summary: "Lista de Clientes",
                operationId: "clientList",
                description: " Listar todos os clientes",
                parameters: [
                    // expected parameters
                    // {
                    //     name: "id", // name of param
                    //     in: "Query", // location of param
                    //     //schema: {
                    //     //     $ref: "#/components/schemas/id", // id model
                    //     // },
                    //     required: false, // mandatory
                    //     //description: "Deleting a done todo", // param desc
                    //},
                ],
                responses: {
                    200: {
                        description: "",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    example:{
                                        "id": "1",
                                        "name": "Teste 2"
                                      },
                                    //$ref: "#/components/schemas/Clients", // id model
                                }
                            }

                        }

                    },
                    201: {},
                    500: {},
                },
            }
        },
        "/stores/list": {
            get: {
                tags: ["Stores"],
                summary: "Lista de Lojas",
                operationId: "storeList",
                description: " Listar todas as lojas",
                parameters: [
                    // expected parameters
                    // {
                    //     name: "id", // name of param
                    //     in: "Query", // location of param
                    //     //schema: {
                    //     //     $ref: "#/components/schemas/id", // id model
                    //     // },
                    //     required: false, // mandatory
                    //     //description: "Deleting a done todo", // param desc
                    //},
                ],
                responses: {
                    200: {
                        description: "",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    example:{
                                        "id": "1",
                                        "name": "MaLu - Teste",
                                        "city": "BA"
                                      },
                                    //$ref: "#/components/schemas/Stores", // id model
                                }
                            }

                        }

                    }
                },
            }
        },
        "/clients/create": {
            post: {
                tags: ["Clients"],
                summary: "Cadastro de Cliente",
                description: "Essa rota será responsavel por cadastrar um novo cliente",
                operationId: "addclient",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {   // este foi o exemplo do post, preciso ver do get
                                    name: {
                                        type: "string",
                                        description: "Nome do Cliente",
                                        example: "Teste"
                                    },

                                }
                            }
                        }
                    }
                },
                parameters: [
                    //     //expected parameters
                    //     {
                    //         name: "name", // name of param
                    //         in: "path", // location of param
                    //         schema: {
                    //             $ref: "#/components/schemas/id", // id model
                    //         },
                    //         required: true, // mandatory
                    //         description: "Registering", // param desc
                    //     },
                ],
                responses: {
                    201: {
                        description: "",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                   // $ref: "#/components/schemas/Clients", // id model
                                }
                                
                            }

                        }

                    },
                    200: {},
                    500: {}
                },
            }
        },
        
        "/order/create": {
            post: {
                tags: ["Orders"],
                summary: "Pedido",
                description: "Essa rota será responsavel pelo pedido",
                operationId: "addOrder",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {   // este foi o exemplo do post, preciso ver do get
                                    shoppingCartId: {
                                        type: "UUID",
                                        description: "Id do Carrinho",
                                        example: "1"
                                    },
                                    storeId: {
                                        type: "UUID",
                                        description: "Id da Loja",
                                        example: "1"
                                    },
                                    // isFinished: {
                                    //     type: "BOOLEAN",
                                    //     description: "Define status do carrinho (Aberto ou Finalizado)",
                                    //     example: "False"
                                    // },


                                }
                            }
                        }
                    }

                },
                parameters: [
                    // expected parameters
                    // {
                    //     name: "id", // name of param
                    //     in: "path", // location of param
                    //     schema: {
                    //         $ref: "#/components/schemas/id", // id model
                    //     },
                    //     required: true, // mandatory
                    //     description: "Deleting a done todo", // param desc
                    // },
                ],
                responses: {
                    200: {
                        description: "",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                   // $ref: "#/components/schemas/object", // id model
                                }
                            }

                        }

                    },
                    201: {},
                    400: {},
                    404: {}



                },
            }
        },
        "/order/update/status": {
            put: {
                tags: ["Orders"],
                summary: "Pedido Status",
                description: "Essa rota será responsavel pela atualizado do statusdo pedido",
                operationId: "addOrder",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {   // este foi o exemplo do post, preciso ver do get
                                    orderId: {
                                        type: "UUID",
                                        description: "Id do Carrinho",
                                        example: "1 "
                                    },
                                    orderStatus: {
                                        type: "INTEGER(1)",
                                        description: "Status da Loja",
                                        example: "1"
                                    },
                                    // isFinished: {
                                    //     type: "BOOLEAN",
                                    //     description: "Define status do carrinho (Aberto ou Finalizado)",
                                    //     example: "False"
                                    // },


                                }
                            }
                        }
                    }

                },
                parameters: [
                    // expected parameters
                    // {
                    //     name: "id", // name of param
                    //     in: "path", // location of param
                    //     schema: {
                    //         $ref: "#/components/schemas/id", // id model
                    //     },
                    //     required: true, // mandatory
                    //     description: "Deleting a done todo", // param desc
                    // },
                ],
                responses: {
                    201: {
                        description: "Compra Retirada",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                   // $ref: "#/components/schemas/orderController", // id model
                                }
                            }

                        }

                    },
                    200: {description: "Compra Realizada",},
                    400: {},
                },
            }
        },

        "/shoppingcarts/create": {
            post: {
                tags: ["shoppingCarts"],
                summary: "Cadastro de Carrinho",
                description: "Essa rota será responsavel por cadastrar um produto no carrinho",
                operationId: "addshoppingcarts",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {   // este foi o exemplo do post, preciso ver do get
                                    clientId: {
                                        type: "UUID",
                                        description: "Id do Cliente",
                                        example: "1"
                                    },
                                    productId: {
                                        type: "UUID",
                                        description: "Id do Produto",
                                        example: "1"
                                    },
                                    // isFinished: {
                                    //     type: "BOOLEAN",
                                    //     description: "Define status do carrinho (Aberto ou Finalizado)",
                                    //     example: "False"
                                    // },


                                }
                            }
                        }
                    }

                },
                parameters: [
                    // expected parameters
                    // {
                    //     name: "id", // name of param
                    //     in: "path", // location of param
                    //     schema: {
                    //         $ref: "#/components/schemas/id", // id model
                    //     },
                    //     required: true, // mandatory
                    //     description: "Deleting a done todo", // param desc
                    // },
                ],
                responses: {
                    200: {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    //$ref: "#/components/schemas/shoppingcarts", // id model
                                }
                            }

                        }

                    }
                },


            }

        },

        "/shoppingcarts/delete": {
            delete: {
                tags: ["shoppingCarts"],
                summary: "Remoção do produto do Carrinho",
                description: "Essa rota será responsavel por cadastrar um produto no carrinho",
                operationId: "removehoppingcarts",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {   // este foi o exemplo do post, preciso ver do get
                                    clientId: {
                                        type: "UUID",
                                        description: "Id do Cliente",
                                        example: "1"
                                    },
                                    productId: {
                                        type: "UUID",
                                        description: "Id do Produto",
                                        example: "1"
                                    },
                                    // isFinished: {
                                    //     type: "BOOLEAN",
                                    //     description: "Define status do carrinho (Aberto ou Finalizado)",
                                    //     example: "False"
                                    // },


                                }
                            }
                        }
                    }

                },
                parameters: [
                    // expected parameters
                    // {
                    //     name: "id", // name of param
                    //     in: "path", // location of param
                    //     schema: {
                    //         $ref: "#/components/schemas/id", // id model
                    //     },
                    //     required: true, // mandatory
                    //     description: "Deleting a done todo", // param desc
                    // },
                ],
                responses: {
                    200: {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                   // $ref: "#/components/schemas/shoppingcarts", // id model
                                }
                            }

                        }

                    }
                },
            }
        },
        "/clients/orders/list": {
            get: {
                tags: ["Orders"],
                summary: "Lista de Pedidos",
                operationId: "orderList",
                description: " Listar de pedidos",
                parameters: [
                   // expected parameters
                    {
                        name: "clientId", // name of param
                        in: "Query", // location of param
                        schema: {
                             $ref: "#/components/schemas/clientId", // id model
                         },
                        required: false, // mandatory
                        //description: "Deleting a done todo", // param desc
                    },
                ],
                responses: {
                    200: {
                        description: "",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    example:{
                                       "id": "1",
                                        "name": "Teste",
                                        "value": 15
                                    } 
                                   // $ref: "#/components/schemas/Products", 
                                }
                                
                            }

                        }

                    }
                },
            }
        },
                
    }
}

module.exports = client;

