//by Alexander Bulgakov
let styles = ["Джаз", "Блюз"];

alert(styles);

styles[styles.length] = "Рок-н-Ролл";

alert(styles);

styles.splice (1, 1, "Классика");

alert(styles);

styles.shift(0, 1);

alert(styles);

styles.unshift("Рэп", "Рэгги");

alert(styles);

