var grafico01 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v6.json",
    "title": "Índice Médio de Desigualdade por Região",
    "data": {
        "url": "https://raw.githubusercontent.com/wendellandrey7-afk/trabalho-do-csv/refs/heads/main/dados-desigualdade-racial-br-01.csv"
    },
    "transform": [
        {
            "calculate": "datum['%_maior_renda_familiar'] / datum['%_menor_renda_familiar']",
            "as": "indice_desigualdade"
        }
    ],
    "width": 500,
    "height": 200,
    "mark": "bar",
    "encoding": {
        "x": {
            "field": "regiao",
            "type": "nominal",
            "title": "Região",
            "axis": {"labelAngle": 0}
        },
        "y": {
            "field": "indice_desigualdade",
            "aggregate": "mean",
            "type": "quantitative",
            "title": "Média do Índice de Desigualdade"
        },
        "color": {
            "field": "regiao",
            "type": "nominal"
        },
        "tooltip": [
            {
                "field": "regiao",
                "type": "nominal",
                "title": "Região"
            },
            {
                "field": "indice_desigualdade",
                "aggregate": "mean",
                "type": "quantitative",
                "title": "Índice Médio"
            }
        ]
    }
};

vegaEmbed('#grafico01', grafico01);