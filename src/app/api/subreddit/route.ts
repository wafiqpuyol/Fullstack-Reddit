export const POST = async (req: Request) => {
  try {
    console.log(await req.json());
  } catch (error) {}
};
