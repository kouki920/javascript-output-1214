'use scrict';

{
  const words = [
    'red',
    'position',
    'function',
    'const'
  ]
  let word ;
  let wordIndex = 0;
  let startTime;
  let isPlaying = false;
  const target = document.getElementById('target');
 

  function windowLoad(){
    window.onload = () => {
      target.textContent = 'ここをクリックしてね';
    }
    }

    windowLoad();

  function setWord(){
    word = words.splice(Math.floor(Math.random() *words.length), 1)[0];
    /*splice()を使って単語が重複されないようにする、１で一つ削除、
    spliceの返り値は配列になるので、配列から取り出す為に添字をつける*/
    target.textContent = word;

    wordIndex = 0;
  }


  target.addEventListener('click',()=>{
    if(isPlaying === true){
      return;
    }

     isPlaying = true;
    startTime = Date.now();
    setWord();
  });

  
    document.addEventListener('keydown', e => {
  
      if(e.key !== word[wordIndex]){/*メインとなる処理以外の処理を早めに記述することでコードを読みやすくしている*/
        return;
      }
  
      //if(e.key  === word[wordIndex]){早期リターンで間違った処理を記述しているから正解時のif文を書かなくて良い
        wordIndex++;

        target.textContent = '_'.repeat(wordIndex) + word.substring(wordIndex);
        //repeatはwordIndex分繋げた_を表示させる、substringはwordIndex番目以降を表示する
  
        if(wordIndex === word.length){
          setWord();
          if(words.length === 0){
            const endTime = ((Date.now() - startTime) / 1000).toFixed(2);
            //終了時点での日時からstartTimeを引いたら経過タイムがでる、m秒単位を1000で割ることで秒に直す
            //小数点二桁まで出したいばあい、toFixed(2)を使う
            const result = document.getElementById('result');
            result.textContent = `終了タイムは${endTime}秒です`;
            return;//上以降の処理をしたくないのでreturnで返す
          }
        }


  })

}