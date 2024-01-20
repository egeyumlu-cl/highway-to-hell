import prisma from "@/lib/prisma";

export default async function handle(req, res) {
  const { method, body } = req;
  const code = 'aral4ever'
  
  switch (method) {
    case "POST":
        // The suit is 0,1,2,3 in the order of hearts, dimaonds, clubs and spades
        if (!(body.description !== '' || body.description !== null || body.title !== '' || body.title !== null || body.code !== code) ) {
            res.status(401).json({ error: "Wrong input or not authnticated" });
        } else {
            try {
                const deck = await prisma.card.create({
                    data: {
                        title : body.title,
                        description: body.description,
                        suit: body.suit,
                        number: body.number,
                        deck: {
                            connect: {
                                id: body.deckId
                            }
                        }
                    }
                })
    
                res.status(200).json(deck);
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
        }
        
    case "GET":
        try {
            const deck = await prisma.card.findUnique({
                where: {
                  id: body.id,
                },
            });

            res.status(200).json(deck);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    
  }
}
