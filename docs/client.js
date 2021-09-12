const client = {
    paths: {

        "/products/list": {
            get: {
                tags: ["Products"],
                operationId: "productList",
                description: " Listar todos produto",
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
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    $ref: "#/components/schemas/Product", // id model
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
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    $ref: "#/components/schemas/Clients", // id model
                                }
                            }

                        }

                    }
                },
            }
        },
        "/stores/list": {
            get: {
                tags: ["Stores"],
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
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    $ref: "#/components/schemas/Products", // id model
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
                    200: {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    $ref: "#/components/schemas/Clients", // id model
                                }
                            }

                        }

                    }
                },
            }
        },

        "/shoppingcarts/create": {
            post: {
                tags: ["shoppingcarts"],
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
                                    $ref: "#/components/schemas/shoppingcarts", // id model
                                }
                            }

                        }

                    }
                },
                

            },
         
    }

}
}


module.exports = client;