<?php
/**
 * 小程序富文本使用的nodes生成类
 * @author Fesion
 * QQ: 61470255
 */
error_reporting(E_ALL & ~E_NOTICE);

$html = <<<EOF
<div>小程序富文本组件支持<strong>粗体</strong>、<em>斜体</em>、<u>下划线</u>、<strike>删除线</strike>、<span style="color:#ff8c00;">字体颜色</span>、<span style="background-color:#ff8c00;">背景颜色</span>、<strong>以<em>及<strike>他</strike><u><strike>们<span style="color:#ff8c00;">之间的</span></strike><span style="color:#ff8c00;">混<span style="background-color:#00ffff;">合</span></span></u></em><u><span style="color:#ff8c00;"><span style="background-color:#00ffff;">嵌</span></span><span style="background-color:#00ffff;">套使</span></u><span style="background-color:#00ffff;">用</span></strong>。</div>
<div>小程序富文本组件还支持打开小程序<a href="/pages/article/index">页面链接</a>、<a href="/pages/index/index">打开tabbar链接</a>、<a href="https://www.baidu.com">网页链接</a></div>
<div>小程序富文本组件还支持有序列表</div>
<ol><li>第一列</li><li>第二列</li><li>第三列</li></ol>
<div>小程序富文本组件也支持无序列表</div>
<ul><li>第一列</li><li>第二列</li><li>第三列</li></ul>
<div>小程序富文本组件还支持左对齐</div>
<div style="text-align: center;">小程序富文本组件还支持居中</div>
<div style="text-align: right;">小程序富文本组件还支持右对齐</div>
<div>支持字号设置</div>
<div><span style="font-size:36px;">三号</span></div>
<div><span style="font-size:24px;">四号</span></div>
<div><span style="font-size:14px;">五号</span></div>
<div>支持标题设置</div>
<h1>h1标题</h1>
<h2>h2标题</h2>
<h3>h3标题</h3>
<h4>h4标题</h4>
<div>支持图片展示<img src="http://i5.hexun.com/2019-06-21/197591143.jpg"/></div>
<blockquote><div>小程序富文本组件还支持引用</div></blockquote>
<div>小程序富文本组件也支持表格的展示</div>
<div>
<table border="1" cellpadding="1" cellspacing="1" style="width: 100%">
    <thead>
        <tr>
            <th>性别</th>
            <th>姓名</th>
            <th>年龄</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>男</td>
            <td>猪坚强</td>
            <td>18</td>
        </tr>
        <tr>
            <td>女</td>
            <td>牛八宝</td>
            <td>22</td>
        </tr>
    </tbody>
</table>
</div>
EOF;

//转换
$htmlNodes = new htmlNodes($html);
$nodes = $htmlNodes->getChildNodes();

//输出内容
echo json_encode($nodes, 256);

/**
 * html标签过滤和生成nodes
 */
class htmlNodes
{
    private $m_dom;
    private $m_xss;
    private $m_ok;
    //不过滤style中的text-align,color,background-color
    private $m_AllowAttr = array('title', 'src', 'href', 'id', 'class', 'width', 'height', 'alt', 'target', 'align', 'color', 'size', 'colspan', 'rowspan', 'controls', 'autoplay', 'data-type', 'data-id', 'style');
    private $m_AllowTag = array('a', 'abbr', 'audio', 'b', 'blockquote', 'br', 'code', 'dd', 'del', 'div', 'dl', 'dt', 'em', 'font', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'i', 'img', 'label', 'li', 'ol', 'p', 'span', 'pre', 'strike', 'strong', 'sub', 'sup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'u', 'ul', 'video');

    /**
     * 构造函数
     *
     * @param string $html 待过滤的文本
     * @param string $charset 文本编码，默认utf-8
     * @param array  $AllowTag 允许的标签，如果不清楚请保持默认，默认已涵盖大部分功能，不要增加危险标签
     */
    public function __construct($html, $charset = 'utf-8', $AllowTag = array())
    {
        $html = trim($html);
        //过滤换行
        $html = str_replace(["\r","\n"], "", $html);
        $this->_removeInvisibleCharacters($html);
        $this->m_AllowTag = empty($AllowTag) ? $this->m_AllowTag : $AllowTag;
        $this->m_xss = strip_tags(str_replace(array("\r","\n"), "", $html), '<' . implode('><', $this->m_AllowTag) . '>');
        if (empty($this->m_xss)) {
            $this->m_ok = FALSE;

            return;
        }
        $this->m_xss = "<meta http-equiv=\"Content-Type\" content=\"text/html;charset={$charset}\"><nouse>" . $this->m_xss . "</nouse>";
        $this->m_dom = new DOMDocument();
        libxml_use_internal_errors(true);
        $this->m_dom->strictErrorChecking = FALSE;
        $this->m_ok = @$this->m_dom->loadHTML($this->m_xss);
        libxml_clear_errors();
    }

    public function getChildNodes($childNodes = null)
    {
        $tmp = array();
        if (!$this->m_dom) {
            return array();
        }
        if (!$childNodes) {
            $childNodes = $this->m_dom->getElementsByTagName('nouse')->item(0)->childNodes;
        }
        foreach ($childNodes as $key => $node) {
            /**
             * @var DomNode $node
             */
            $tmp[$key] = array(
                'name'    => trim($node->nodeName, '#'),
                'tagName' => $this->_getTagName($node->nodeName)
            );
            //font-转span
            if ($node->nodeName == 'font') {
                $tmp[$key]['name'] = 'span';
            }
            if ($node->hasAttributes()) {
                foreach ($node->attributes as $attrib) {
                    if(in_array($attrib->name, array('title', 'src', 'href', 'id', 'class', 'width', 'height', 'alt', 'target', 'align', 'color', 'size', 'colspan', 'rowspan', 'controls', 'autoplay', 'style'))){
                        $tmp[$key]['attrs'][$attrib->name] = $attrib->value;
                    }
                }
                if ($node->nodeName == 'font' && $tmp[$key]['attr']['color']) {
                    $tmp[$key]['attrs']['style'] = 'color: ' . $tmp[$key]['attrs']['color'] . ';' . ($tmp[$key]['attrs']['style'] ? $tmp[$key]['attrs']['style'] : '');
                }
            }
            //组装class
            $tmp[$key]['attrs']['class'] = 'rich-' . $tmp[$key]['name'] . ' ' . ($tmp[$key]['attrs']['class'] ? $tmp[$key]['attrs']['class'] : '');
            if ($node->hasChildNodes()) {
                $tmp[$key]['children'] = $this->getChildNodes($node->childNodes);
            } else {
                if($node->nodeName == 'img'){
                    $tmp[$key]['attrs']['style'] = $tmp[$key]['attrs']['style'] . "max-width: 100% !important; height: auto !important;";
                }
                else if ($node->nodeName == '#text' && $node->nodeValue) {
                    unset($tmp[$key]['name'], $tmp[$key]['attrs']);
                    $tmp[$key]['type'] = 'text';
                    $tmp[$key]['text'] = $node->nodeValue;
                }
            }
        }

        return $tmp;
    }

    private function _getTagName($name)
    {
        $tagName = $name;
        switch ($name) {
            case 'abbr':
            case 'b':
            case 'del':
            case 'em':
            case 'font':
            case 'i':
            case 'label':
            case 'span':
            case 'strike':
            case 'strong':
            case 'sub':
            case 'sup':
            case 'u':
                $tagName = 'text';
                break;
            case 'blockquote':
            case 'div':
            case 'p':
            case 'dl':
            case 'h1':
            case 'h2':
            case 'h3':
            case 'h4':
            case 'h5':
            case 'h6':
            case 'ul':
            case 'ol':
            case 'li':
            case 'dt':
            case 'dd':
                $tagName = 'view';
                break;
            case 'code':
            case 'pre':
                $tagName = 'pre';
                break;
        }

        return $tagName;
    }

    private function _removeInvisibleCharacters(&$str, $url_encoded = TRUE)
    {
        $non_displayables = array();
        if ($url_encoded) {
            $non_displayables[] = '/%0[0-8bcef]/';    // url encoded 00-08, 11, 12, 14, 15
            $non_displayables[] = '/%1[0-9a-f]/';    // url encoded 16-31
        }
        $non_displayables[] = '/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]+/S';    // 00-08, 11, 12, 14-31, 127
        do {
            $str = preg_replace($non_displayables, '', $str, -1, $count);
        } while ($count);
    }
}