import prisma from "@/lib/prisma";

export default async function handle(req, res) {
  const { method, body } = req;
  const code = 'aral4ever'
  
  switch (method) {
    case "GET":
        try {
            const deck = await prisma.deck.findMany({
                select: {
                    id: true,
                    title: true,
                    _count: {
                      select: { cards: true },
                    },
                  },
            });

            res.status(200).json(deck);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    
  }
}
