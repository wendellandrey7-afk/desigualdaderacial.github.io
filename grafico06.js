var grafico06 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
        "url": "https://raw.githubusercontent.com/wendellandrey7-afk/trabalho-do-csv/refs/heads/main/dados-desigualdade-racial-br-01.csv"
    },
    "transform": [
        {
            "calculate": "datum['%_maior_renda_familiar'] - datum['%_menor_renda_familiar']",
            "as": "desigualdade"
        }
    ],
    "mark": "rect",
    "width": 300,
    "height": 200,
    "encoding": {
        "y": {
            "field": "regiao",
            "type": "nominal",
            "title": "Região"
        },
        "x": {
            "field": "etnia",
            "type": "nominal",
            "title": "Grupo Étnico",
            "axis": {"labelAngle": 0}
        },
        "color": {
            "field": "desigualdade",
            "type": "quantitative",
            "title": "Desigualdade (%)",
            "scale": {
                "scheme": "redyellowgreen",
                "reverse": true
            }
        },
        "tooltip": [
            {
                "field": "regiao",
                "type": "nominal",
                "title": "Região"
            },
            {
                "field": "etnia",
                "type": "nominal",
                "title": "Etnia"
            },
            {
                "field": "%_maior_renda_familiar",
                "type": "quantitative",
                "title": "% Maior Renda"
            },
            {
                "field": "%_menor_renda_familiar",
                "type": "quantitative",
                "title": "% Menor Renda"
            },
            {
                "field": "desigualdade",
                "type": "quantitative",
                "title": "Desigualdade Calculada"
            }
        ]
    }
};

vegaEmbed('#grafico06', grafico06);