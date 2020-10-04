/*
    khởi tạo git: git init
    kết nối project với repo: git remote add origin url-repo
    kiểm tra trạng thái của source: git status
        + file màu đỏ: file đã thay đổi nhưng chưa save (working copy)
        + file màu xanh: file đã thay đổi và đã được save(staging area);
    Save những file đã thay đổi(ửoking copy => staging area); git add file-name hoặc .(tất cả các file);
    commit những thay đổi (stagin area => local repo ): git commit -m "message"
    Lần đầu tiên xài git cần chạy 2 lệnh:
    git congig --global user.name "name"
    git config ==global user.email "email"
    đẩy code lên server (local repo => remote repository): git push -u origin master
    lần thứ 2 trở đi thì git push
    tạo 1 branch mới: git checkout -b branch-name
    quay lại branch: git checkout branch-name
    add file to branch master: git pull
*/