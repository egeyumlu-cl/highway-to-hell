import prisma from "@/lib/prisma";

export default async function handle(req, res) {
  const { method, body } = req;
  const code = 'aral4ever'
  
  switch (method) {
    case "POST":
        if (body.code !== code) {
            res.status(401).json({ error: "You are not authenticated" });
        } else {
            try {
                const deck = await prisma.deck.create({
                    data: {
                        title : body.title,
                    }
                })

                res.status(200).json(deck);
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
        }
        

    case "GET":
        try {
            const deck = await prisma.deck.findUnique({
                where: {
                  title: body.title,
                },
                include: {
                    cards: true,
                }
            });

            res.status(200).json(deck);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    
  }
}
