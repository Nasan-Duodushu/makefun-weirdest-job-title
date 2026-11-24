// Weirdest Job Title: Blind Judge Showdown — one job title, 60 characters
// at most, the weirdest one we can think of. Writes it to /output/entry.txt.
import { mkdir, writeFile } from "node:fs/promises";

class TitleEmitter {
  private readonly dir = "/output";
  private readonly file = "/output/entry.txt";

  private measure(text: string): number {
    const n = [...text].length;
    if (n < 1 || n > 60) {
      throw new Error(`title is ${n} chars, must be 1-60`);
    }
    return n;
  }

  async run(text: string): Promise<void> {
    const n = this.measure(text);
    await mkdir(this.dir, { recursive: true });
    await writeFile(this.file, text, { encoding: "utf8" });
    console.log(`wrote ${n} chars to ${this.file}`);
  }
}

const TITLE = "Senior Vice President of Apologizing to the Printer";

await new TitleEmitter().run(TITLE);
