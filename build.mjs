// 토리 숲 빌드: public/ 을 dist/ 로 복사하고 서비스워커 캐시 버전을 갱신 (외부 패키지 없음)
import { cpSync, rmSync, readFileSync, writeFileSync } from "node:fs";
rmSync("dist", { recursive: true, force: true });
cpSync("public", "dist", { recursive: true });
const sw = readFileSync("dist/sw.js", "utf8").replace("__BUILD__", String(Date.now()));
writeFileSync("dist/sw.js", sw);
console.log("dist/ 준비 완료");
