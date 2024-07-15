import { Button } from "@repo/ui/button";

interface RootPageProps {}

const RootPage: React.FC<RootPageProps> = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-md p-4">
        <div className="grid justify-center space-y-4">
          <h1 className="text-2xl font-bold">Hello World</h1>
          <Button>Button</Button>
        </div>
      </div>
    </section>
  );
};

export default RootPage;
