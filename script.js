document.addEventListener('DOMContentLoaded', () => {

    // --- タブ切り替え機能 ---
    const tabs = document.querySelectorAll('.tab-button');
    const galleryItems = document.querySelectorAll('.gallery-item');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // すべてのタブから.activeクラスを削除
            tabs.forEach(item => item.classList.remove('active'));
            // クリックされたタブに.activeクラスを追加
            tab.classList.add('active');

            const category = tab.getAttribute('data-category');

            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                // カテゴリが一致するか、「すべて」が選択されている場合は表示
                if (category === 'all' || category === itemCategory) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });


    // --- 画像拡大モーダル機能 ---
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeButton = document.querySelector('.close-button');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // クリックされた画像のsrcをモーダル画像に設定
            modalImage.src = item.src;
            // モーダルを表示
            modal.classList.add('show');
        });
    });

    // クローズボタンでモーダルを閉じる
    closeButton.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // モーダルの背景クリックでモーダルを閉じる
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

});
