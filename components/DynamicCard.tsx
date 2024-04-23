import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { SubMenu } from "@/typings";

type Props = {
  subMenu: SubMenu;
};

function DynamicCard({ subMenu }: Props) {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>{subMenu.subMenuTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{subMenu.description}</p>
      </CardContent>
    </Card>
  );
}
export default DynamicCard;
