import {NextUIProvider} from "@nextui-org/system";

  function Provider({children}) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
       { children}
    </NextUIProvider>
  );
}
export default Provider;