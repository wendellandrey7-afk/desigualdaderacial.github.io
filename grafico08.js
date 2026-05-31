const grafico08 = {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "data": {
                "url": "https://raw.githubusercontent.com/wendellandrey7-afk/trabalho-do-csv/refs/heads/main/dados-desigualdade-racial-br-01.csv",
                "format": {
                    "type": "csv"
                }
            },
            "transform": [
                {
                    "calculate": "datum['%_maior_renda_familiar'] / datum['%_menor_renda_familiar']",
                    "as": "indice_desigualdade"
                }
            ],
            "mark": "bar",
            "width": 450,
            "height": 250,
            "encoding": {
                "x": {
                "field": "ano", 
                "type": "nominal", 
                "axis": {"labelAngle": 0}
                },
                "y": {
                    "aggregate": "mean",
                    "field": "indice_desigualdade",
                    "type": "quantitative",
                    "title": "Média do Índice de Desigualdade"
                },
                "color": {
                    "field": "regiao",
                    "type": "nominal",
                    "title": "Região"
                },
                "tooltip": [
                    {
                        "field": "ano",
                        "title": "Ano"
                    },
                    {
                        "field": "regiao",
                        "title": "Região"
                    },
                    {
                        "aggregate": "mean",
                        "field": "indice_desigualdade",
                        "title": "Índice Médio"
                    }
                ]
            }
        };
        vegaEmbed('#grafico08', grafico08);