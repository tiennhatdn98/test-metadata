const tokenUris = [];

for (let i = 1; i <= 10; i++) {
  tokenUris.push(
    `https://raw.githubusercontent.com/tiennhatdn98/test-metadata/master/${i}.json`
  );
}

console.log(tokenUris);
