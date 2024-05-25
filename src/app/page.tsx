import { RichTextEditor } from './modules';
import s from './page.module.scss'

export default function Home() {
  return (
    <main className={s.main}>
      <RichTextEditor />
    </main>
  );
}
