const form=document.getElementById('requestForm'), out=document.getElementById('previewText');
function val(n){return (new FormData(form).get(n)||'未填写').toString().trim()||'未填写'}
function checked(n){return [...form.querySelectorAll(`input[name="${n}"]:checked`)].map(x=>x.parentElement.innerText.trim()).join('、')||'未选择'}
function build(){return `【造梦间｜OC游戏定制需求草稿】\n\n称呼：${val('name')}\n联系方式：${val('contact')}\n\n角色数量：${val('characters')}\n角色关系：${val('relation')}\n角色设定：\n${val('characterInfo')}\n\n故事类型：${checked('genre')}\n故事想法：\n${val('story')}\n\n期望时长：${val('length')}\n剧本情况：${val('script')}\n希望功能：${checked('feature')}\n\n补充需求：\n${val('extra')}`}
document.getElementById('previewBtn').onclick=()=>{out.textContent=build();document.getElementById('preview').scrollIntoView({behavior:'smooth'})};
document.getElementById('copyBtn').onclick=async()=>{const t=build();try{await navigator.clipboard.writeText(t);alert('需求文本已复制。')}catch(e){out.textContent=t;document.getElementById('preview').scrollIntoView({behavior:'smooth'});alert('浏览器未允许自动复制，已生成到页面下方。')}};
