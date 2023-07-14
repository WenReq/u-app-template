export default {
    inserted(el, binding, vnode) {
        const { value } = binding;
        //判断是否有权限
        let permissionList = localStorage.getItem("fa_permissions") || [];
        let hasBtn;
        if (value) {
            hasBtn = permissionList.includes(value[0]);
        }
        //没有权限则删除父元素，或者隐藏当前元素
        if (!hasBtn && value) {
            if (!el.parentNode) {
                el.style.display = "none";
            } else {
                el.parentNode.removeChild(el);
            }
        }
    },
};
