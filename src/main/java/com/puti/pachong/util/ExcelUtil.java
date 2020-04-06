package com.puti.pachong.util;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.ss.usermodel.HorizontalAlignment;

import java.io.*;
import java.util.List;

/**
 * @author yaotianchi
 * @date 2019/10/25
 */
@Slf4j
public class ExcelUtil {


    /**
     * 生成一个HSSFWorkbook
     *
     * @param sheetName   sheet名称
     * @param title       标题
     * @param startRowIdx 从第几行开始，0表示第一行
     * @param startColIdx 从第几列开始，0表示第一列
     * @param wb          HSSFWorkbook对象
     * @return
     */
    public static HSSFWorkbook generateWorkbook(String sheetName,
                                                String[] title,
                                                int startRowIdx,
                                                int startColIdx,
                                                List<List<String>> valueList,
                                                HSSFWorkbook wb) throws Exception {

        String[][] values = new String[valueList.size()][valueList.get(0).size()];
        for (int i = 0; i < valueList.size(); i++) {
            List<String> strings = valueList.get(i);
            for (int j = 0; j < strings.size(); j++) {
                values[i][j] = valueList.get(i).get(j);
            }
        }
        if (wb == null) {
            wb = new HSSFWorkbook();
        }
        HSSFSheet sheet = wb.createSheet(sheetName);
        HSSFRow row = sheet.createRow(startRowIdx);
        HSSFCellStyle style = wb.createCellStyle();
        style.setAlignment(HorizontalAlignment.CENTER);
        HSSFFont font = wb.createFont();
        font.setBold(true);
        font.setFontHeightInPoints((short) 14);
        style.setFont(font);
        row.setRowStyle(style); //设置标题样式
        HSSFCell cell = null;

        //创建标题
        for (int i = 0; i < title.length; i++) {
            cell = row.createCell(i + startColIdx);
            cell.setCellValue(title[i]);
            cell.setCellStyle(style);
        }
        //创建内容
        for (int i = 0; i < values.length; i++) {
            row = sheet.createRow(i + 1 + startRowIdx);
            for (int j = 0; j < values[i].length; j++) {
                row.createCell(j + startColIdx).setCellValue(values[i][j]);
                if (i == values.length - 1) {
                    sheet.autoSizeColumn((short) (j + startColIdx));
                    sheet.setColumnWidth(j + startColIdx, sheet.getColumnWidth(j + startColIdx) + 255 * 5);
                }
            }
        }
        return wb;
    }


    @SneakyThrows
    public static void createExcel(String filePath, HSSFWorkbook workbook) {
        if (!filePath.endsWith(".xls")) {
            log.info("Excel 文件名需要以后缀{}结尾", ".xls");
        }
        File file = new File(filePath);
        if (!file.exists()) {
            file.createNewFile();
        }
        FileOutputStream outputStream = new FileOutputStream(file);
        workbook.write(outputStream);
        outputStream.close();

    }

    /*
     * 生成一个HSSFWorkbook的输入流
     */
    public static InputStream generateInputStream(String sheetName,
                                                  String[] title,
                                                  int startRowIdx,
                                                  int startColIdx,
                                                  List<List<String>> valueList,
                                                  HSSFWorkbook wb) throws Exception {
        HSSFWorkbook workbook = generateWorkbook(sheetName, title, startRowIdx, startColIdx, valueList, wb);
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        workbook.write(bos);
        return new ByteArrayInputStream(bos.toByteArray());
    }


}