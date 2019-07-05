// by Александр Булгаков
number:
for (var i = 2; i <= 10; i++) {
    for (var n = 2; n < i; n++)
        if (i % n == 0) continue number;
    {
        alert(i);
    }
}

