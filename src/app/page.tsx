import { MantineProvider, createTheme } from '@mantine/core';
import { CompareTextEditor } from './modules';
import s from './page.module.scss'

const theme = createTheme({
  /* Put your mantine theme override here */
});


export default function Home() {
  return (
    <main className={s.main}>
      <MantineProvider theme={theme}>
        <CompareTextEditor />
      </MantineProvider>
    </main>
  );
}
